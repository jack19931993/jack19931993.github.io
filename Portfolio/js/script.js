$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
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