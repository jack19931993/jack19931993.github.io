$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.btn_top').fadeIn();
		} else {
			$('.btn_top').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.btn_top').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
});

//Scroll_Smooth.js
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});
  });
