$(document).ready(function(){

	$('#slides').superslides({
		animation: "fade",
		play: 8000,
		pagination: false
	});

	var typed=new Typed(".typed", {strings:["WEB DEVELOPER","VIRTUAL ASSISTANT","SHOPIFY/WOOCOMMERCE SPECIALIST"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor:false

});

}); 