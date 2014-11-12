var typeIter = -1;
var type = ['Education','Commerce','Infotech','Nursing','Business','Mining','Sports_science','Physical_ed','Science'];
var container = document.querySelector('.container');
var removed_results = new Array();
var grid_items = new Array();
var pinned_items;

var msnry = new Masonry (container, {
  itemSelector: '.item',
  columnWidth: 202,
  animationOptions: {
    duration: 300
  }
});

function reorder_items(){
	
	//clear existing pins
	$('div.item').each(function() {
		if($(this).hasClass('pinned')) {
			$(this).removeClass('pinned');
		}
	});
	
	//Move pinned to start of the parent
	for (i = 0; i < grid_items.length; i++) { 
		var item = grid_items[i];
		for (pin_count=0; pin_count<pinned_items.length; pin_count++){
			if (pinned_items[pin_count] == item.data("sku")){
				item.addClass("pinned");
				item.parent().prepend(item);
			}
		}
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

$(document).ready(function(){
	
	pinned_items = getCookie('pinned') ? JSON.parse(getCookie('pinned')) : new Array();
	
	for (i = 0; i < data.length; i++) { 
       grid_items.push(loadOne());
	}

	//re-order if pinned
	reorder_items();

	$(".pin").click(function(event){
		/*if(pin_item($(this).closest($(".item")).data("sku"))) {
			reorder_items();
			msnry.reloadItems();
			msnry.layout();
		}*/
		pin_item($(this).closest($(".item")).data("sku"));
		reorder_items();
		msnry.reloadItems();
		msnry.layout();

		return false;
	});

	msnry.addItems($(".item"));
	msnry.layout();

	//Filter by location
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(determine_closest, denyPosition);
	} else { 
	    $('.position').html( "Geolocation is not supported by this browser.");
		poptoast('Geolocation is not supported by this browser. Your results will not be filtered.');
	}

});

function pin_item(id){
	
	var add_pin = true;

	for (i=0; i<pinned_items.length; i++){
		if (pinned_items[i]==id) {
			position = pinned_items.indexOf(id);
			if ( ~position ) pinned_items.splice(position, 1);
			add_pin = false;
		}
	}

	if (add_pin) {pinned_items.push(id)
		poptoast('You have pinned one item. ' + ($('.pinned').length + 1) + ' items are now pinned.');
	
	}
	else {
		poptoast('You have removed a pinned item. ' + ($('.pinned').length - 1) + ' items remain pinned.');
		
	}
	document.cookie="pinned=" + JSON.stringify(pinned_items) + ";";
	
	return add_pin;
}

$('.container').on('click','.dismiss', function(event){
  event.stopPropagation();
	$(this).parents('.item').remove();
	msnry.layout();
});

$('.container').on('click','div.item', function(event){
	//quick hack to load each page level
	switch(window.document.title) {
		case "Disciplines":
			window.location = 'programs.html';
		break;
		
		case "Programs":
			window.location = 'single-program.html';
		break;
		
		default:
	}
});

$('.add').click(function() {
	loadOne();
});

$(".selectmenu").change(function(event){
	changeLocation(event.target.value.toLowerCase());
});	

function loadOne()
{
	$('.zzz').removeClass('zzz');

	typeIter ++;
	divStyle = 'col1';

	var mytype = data[typeIter].name;
	var x = Math.random();
	if (x < 0.90) {
		divStyle = 'col1';
	}			
	else if (x > 0.90 && x < 0.95) {
		divStyle = 'col2';
	}			
	else  {
		divStyle = 'row2';
	}
	$('.container').prepend('<div class="item '+divStyle+' zzz '+data[typeIter].sku+'" style="background-image: url(assets/images/'+data[typeIter].sku+'.jpg);">\
	<span class="dismiss"><img src="assets/images/trash.png" style="width:20px"></span><a href="#" class="btn-pin"><span class="pin"></span></a><span style="display:block; padding: 10px" class="title">'+mytype+'</span><div class="uni">'+data[typeIter].uni+'</div></div>');

	var item = $(".zzz");
	item.data("sku", data[typeIter].sku);
	return item;
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

String.prototype.titleize = function() {
  var words = this.split(' ')
  var array = []
  for (var i=0; i<words.length; ++i) {
    array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1))
  }
  return array.join(' ')
}

function determine_closest(position) {

    //use lat long against an array of uni positions to get nearest campus
    var uni_coords = new Array();
    uni_coords.push({name:"ballarat", lat:-37.5592153, long:143.8626583});
    uni_coords.push({name:"churchill", lat:-38.311211, long:146.429409});
    uni_coords.push({name:"horsham", lat:-36.712149, long:142.18545});

    var shortest_distance = 200000000; 
    var closest_uni;

    for (var i = 0; i < uni_coords.length; i++) {
        distance = getDistanceFromLatLonInKm (position.coords.latitude, position.coords.longitude, uni_coords[i].lat, uni_coords[i].long);
        if (distance < shortest_distance){
        	shortest_distance = distance;
        	closest_uni = uni_coords[i];
        }
    }

    //call drop down change event sto filter results
    $("#nearest_campus_name").html("Nearest Campus: " + closest_uni.name.titleize());
	poptoast("Your nearest campus is: " + closest_uni.name.titleize() + ". Results have been filtered.");
    changeLocation(closest_uni.name);
}

function changeLocation(locationName){
	filterTilesByKeyword (locationName);
}

function denyPosition(position) {
	
	poptoast('Your current location has not been provided by this browser. You may filter results by Campus with the menu options instead.');
	
	//location services denied
	//hide closest uni name
	//choose ballarat as a default
}

function filterTilesByKeyword(keyword){
	$.each($('.item'), function(i,item){
		if ($(item).text().toLowerCase().indexOf(keyword) > 0)
		{}
		else { $(item).remove()}
		msnry.layout();
	});
}
	
$('.filter').click(function() {
	filterTilesByKeyword($('#filtertxt').val().toLowerCase());
});

$('.menutoggle').click(function() {
	$('.menu').toggleClass('menuout');
});

$('#filtertxt').on('keyup',function(e){
	console.log(e)
	if (e.keyCode == 13)
	{$('.filter').click();}
});

function poptoast(message) {
	$('.toast').remove();
	$('body').append('<div class="toast" style=""><span class="dismisstoast">x</span><br>'+message+'</div>');
	$('.toast').delay(300).animate({top: 25},600,function(){}).delay(3900).animate({top: -225},600,function(){});
}

$('body').on('click tap touch','.dismisstoast',function(){$('.toast').remove();});
