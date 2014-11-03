		var typeIter = Math.floor(Math.random()*6);
		var type = ['Education','Commerce','Infotech','Nursing','Business','Mining','Sports_science','Physical_ed','Science'];
		var container = document.querySelector('.container');
		var msnry = new Masonry (container, {
		  itemSelector: '.item',
		  columnWidth: 202,
		  animationOptions: {
		    duration: 300
		  }
		});
		
		console.log(msnry);
		
		$('.container').on('click','.dismiss', function(event){
		  event.stopPropagation();
			$(this).parents('.item').remove();
			console.log(msnry);
			msnry.layout();
		});
		
		$('.container').on('click','.item .title', function(event){
			 $('.displayarea').html('');
			 $(this).parents('.item').clone().appendTo('.displayarea');
			 stylebef = $('.displayarea').find('.item').attr('style');
			 setTimeout(function(){
				 $('.displayarea').find('.item').attr('style',stylebef + ' ; width:670px;height:400px; z-index: 100; opacity: 1')
		 }, 400);
		 setTimeout(function(){
			 $('.displayarea').find('.item').attr('style',stylebef + ' ; width:670px;height:410px; z-index: 100; opacity: 1;')
	 }, 900);
			 
		});
		
		$('.add').click(function() {
			loadOne();
		});
		
		
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        $('.position').html( "Geolocation is not supported by this browser.");
	    }
	
		function loadOne()
		{
			$('.zzz').removeClass('zzz');
			typeIter ++;
			divStyle = 'col1';
			if (typeIter == 9) {typeIter = 0}
			var mytype = data[typeIter].name;
			var x = Math.random();
			if (x < 0.53) {
				divStyle = 'col1';
			}			
			else if (x > 0.53 && x < 0.85) {
				divStyle = 'col2';
			}			
			else  {
				divStyle = 'row2';
			}			
			$('.container').prepend('<div class="item '+divStyle+' zzz '+mytype+'">\
			<span style="display:block; padding: 10px" class="title">'+mytype.replace('_',' ')+'<span class="dismiss" style="float:right; border-radius: 50%; width: 23px; text-align: center; display: inline-block"> x </span></span>\
			<div class="desc">'+data[typeIter].description+'</div></div>');
			var items = document.querySelector('.zzz');
			msnry.prepended(items);
			
		}

	function showPosition(position) {
	    $('.position').html("Latitude: " + position.coords.latitude +   "<br>Longitude: " + position.coords.longitude);	
	}
	
	for (i = 0; i < 25; i++) { 
		loadOne();
	}
		
	$('.filter').click(function() {
	$.each($('.item'), function(i,item){
		if ($(item).text().toLowerCase().indexOf($('#filtertxt').val().toLowerCase()) > 0)
		{}
		else {$(item).remove();}
		msnry.layout();
		
	});
	

});

$('.menutoggle').click(function() {
	$('.menu').toggleClass('menuout');
});