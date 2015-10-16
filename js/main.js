$(document).ready(function(e) {
	// $("img[alt='Batman']").addClass('shown');
	$('img').first().addClass('shown');
	
	var name = $('img').attr('title');
	// var image = $()
	
	$('h1').text(name);
	
	$("button[class='next']").click(function(){ 
 		$('.shown').next().addClass('shown');
 		$('.shown').prev().removeClass('shown');
	});


});

// Can you make the initial load better or more effiencent?
// set the variables from the go and grab the urls?

// Button listener?

// Fade in and fade out properties.



