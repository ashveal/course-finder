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

		//hack to load existing image into newly created div
		if($item.hasClass('education')) {
			$img = 'education';
		}
		
		if($item.hasClass('it')) {
			$img = 'it';
		}
		
		if($item.hasClass('nurse')) {
			$img = 'nurse';
		}
		
		if($item.hasClass('gensci')) {
			$img = 'gensci';
		}
		
		if($item.hasClass('auto')) {
			$img = 'auto';
		}
		
		if($item.hasClass('research')) {
			$img = 'research';
		}
		
		if($item.hasClass('arts')) {
			$img = 'arts';
		}
		
		if($item.hasClass('ohs')) {
			$img = 'ohs';
		}
		
		if($item.hasClass('rural')) {
			$img = 'rural';
		}
		
		if($item.hasClass('humanities')) {
			$img = 'humanities';
		}
		
		if($item.hasClass('human_movement')) {
			$img = 'human_movement';
		}
		
		if($item.hasClass('general_science')) {
			$img = 'general_science';
		}
		
		if($item.hasClass('nursing')) {
			$img = 'nursing';
		}
		
		if($item.hasClass('cookery')) {
			$img = 'cookery';
		}
		
		if($item.hasClass('hair')) {
			$img = 'hair';
		}
		
		if($item.hasClass('environmental_science')) {
			$img = 'environmental_science';
		}
		
		if($item.hasClass('building')) {
			$img = 'building';
		}
		
		if($item.hasClass('automotive')) {
			$img = 'automotive';
		}
		
		if($item.hasClass('engineering')) {
			$img = 'engineering';
		}
		
		if($item.hasClass('business')) {
			$img = 'business';
		}
		
		if($item.hasClass('envsci')) {
			$img = 'envsci';
		}
		
		if($item.hasClass('psychology')) {
			$img = 'psychology';
		}
		
		if($item.hasClass('humanmov')) {
			$img = 'humanmov';
		}
		
		if($item.hasClass('sportmanage')) {
			$img = 'sportmanage';
		}
		
		if($item.hasClass('GradDripOutdoor')) {
			$img = 'GradDripOutdoor';
		}
		
		if($item.hasClass('bachexcercisesport')) {
			$img = 'bachexcercisesport';
		}
		
		if($item.hasClass('sportsciencehonours')) {
			$img = 'sportsciencehonours';
		}
		
		if($item.hasClass('SportManHonours')) {
			$img = 'SportManHonors';
		}
		
		if($item.hasClass('BachBusinessSpot')) {
			$img = 'BachBusinessSpot';
		}
		
		if($item.hasClass('SportManHonours')) {
			$img = 'SportManHonours';
		}
		
		if($item.hasClass('PhysEdHonors')) {
			$img = 'PhysEdHonors';
		}
		
		if($item.hasClass('BachHealthPhys')) {
			$img = 'BachHealthPhys';
		}
		
		if($item.hasClass('masterclinEx')) {
			$img = 'masterclinEx';
		}
		
		if($item.hasClass('diplomaexcercisephys')) {
			$img = 'diplomaexcercisephys';
		}
		
		if($item.hasClass('dipremmassage')) {
			$img = 'dipremmassage';
		}
		
		if($item.hasClass('certivmassage')) {
			$img = 'certivmassage';
		}
		
		if($item.hasClass('certivfitness')) {
			$img = 'certivfitness';
		}
	
		if($item.find('.program-image').size() == 1) {
			//$item.append('<div class="program-image '+$img+'"></div>');
		} else {
			$item.append('<div class="program-image '+$img+'"></div>');
		}
		
	});
		
	listview.reloadItems();
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
	
	gridview.reloadItems();
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

	//move fast facts panel to top on smaller screens
	if($(window).width() < 858) {
		$('div.fast-facts').prepend($('div.rhs-content'));
	} else {
		$('div.rhs').prepend($('div.rhs-content'));
	}
	
});





