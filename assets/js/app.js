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
	//Move pinned to start of the parent
	for (i = 0; i < grid_items.length; i++) { 
		var item = grid_items[i];
		for (pin_count=0; pin_count<pinned_items.length; pin_count++){
			if (pinned_items[pin_count] == item.data("id")){
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
       loadOne();
	}

	//re-order if pinned
	reorder_items();

	msnry.addItems($(".item"));
	msnry.layout();

	//Filter by location
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(determine_closest, denyPosition);
	} else { 
	    $('.position').html( "Geolocation is not supported by this browser.");
	}

});

function pin_item(id){
	document.cookie="pinned=" + JSON.stringify() + ";";
}

$('.container').on('click','.dismiss', function(event){
  event.stopPropagation();
	$(this).parents('.item').remove();
	msnry.layout();
});

$('.container').on('click','.item .title', function(event){
	window.location = 'programs.html';
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

	if (typeIter == 9) {typeIter = 0}

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

	$('.container').prepend('<div class="item '+divStyle+' zzz '+mytype+'">\
	<span style="display:block; padding: 10px" class="title">'+mytype.replace('_',' ')+'<span class="dismiss" style="float:right; border-radius: 50%; width: 23px; margin-left: text-align: center; display: inline-block"> <img src="assets/images/trash.png" style="width:20px"> </span><span class="pin" style="float:right; border-radius: 50%; width: 23px; margin-right: 6px; text-align: center; display: inline-block"> <img src="assets/images/pin.png" style="width:10px"> </span></span>\
	<div class="desc">'+data[typeIter].description+'</div><div class="uni">'+data[typeIter].uni+'</div></div>');

	var item = $(".zzz");
	item.data("id", data[typeIter].id);
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
    changeLocation(closest_uni.name);
}

function changeLocation(locationName){
	loadOne();
	filterTilesByKeyword (locationName);
}

function denyPosition(position) {
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
