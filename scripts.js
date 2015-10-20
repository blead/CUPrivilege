//Smooth scrolling for internal anchors
$(function() {
	$('a[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-50 //50px offset for navbar
				}, 750);
			}
		}
	});
});

//Slide animations for dropdowns
$('.dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

//Navigation menu automatically collapses
$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
		}
});
