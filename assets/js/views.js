$('a.btn-list').click(function() {
	
	$(this).addClass('btn-list-selected');
	$('a.btn-grid').removeClass('btn-grid-selected');
	
	var sizer = document.querySelector('.container');
	
	var listview = new Masonry(container, {
		itemSelector: '.item',
		columnWidth: sizer,
		animationOptions: {
			duration: 300
		}
	});
	
	$('div.container').addClass('list-view');
	
	$('div.container div.item').each(function() {
	
		var $item = $(this);
		var $img = '';
		
		if($item.hasClass('Physical_ed')) {
			$img = 'Physical_ed';
		}
		
		if($item.hasClass('Education')) {
			$img = 'Education';
		}
		
		if($item.hasClass('Commerce')) {
			$img = 'Commerce';
		}
		
		if($item.hasClass('Business')) {
			$img = 'Business';
		}
		
		if($item.hasClass('Sports_science')) {
			$img = 'Sports_science';
		}
		
		if($item.hasClass('Mining')) {
			$img = 'Mining';
		}
		
		if($item.hasClass('Nursing')) {
			$img = 'Nursing';
		}
		
		if($item.hasClass('Infotech')) {
			$img = 'Infotech';
		}
		
		if($item.hasClass('Science')) {
			$img = 'Science';
		}
	
		if($item.find('.program-image').size() == 1) {
			//$item.append('<div class="program-image '+$img+'"></div>');
		} else {
			$item.append('<div class="program-image '+$img+'"></div>');
		}
		
	});
		
	listview.layout();
	
	return false;
	
});

$('a.btn-grid').click(function() {
	
	$(this).addClass('btn-grid-selected');
	$('a.btn-list').removeClass('btn-list-selected');
	
	var gridview = new Masonry(container, {
		itemSelector: '.item',
		columnWidth: 202,
		animationOptions: {
			duration: 300
		}
	});
	
	$('div.container').removeClass('list-view');
	
	$('div.container div.item').each(function() {
	
		$(this).find('div.program-image').remove();
	
	});
	
	gridview.layout();
	
	return false;
	
});

$('a.btn-domestic').click(function() {
	
	$(this).addClass('selected');
	$('div.content-domestic').show();
	$('a.btn-international').removeClass('selected');
	$('div.content-international').hide();
	
	return false;
	
});

$('a.btn-international').click(function() {
	
	$(this).addClass('selected');
	$('div.content-international').show();
	$('a.btn-domestic').removeClass('selected');
	$('div.content-domestic').hide();
	
	return false;
	
});

$(window).resize(function() {

	if($(window).width() < 858) {
		$('div.fast-facts').prepend($('div.rhs-content'));
	} else {
		$('div.rhs').prepend($('div.rhs-content'));
	}
	
});





