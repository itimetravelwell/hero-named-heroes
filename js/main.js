$(document).ready(function(e) {
	$("img[alt='Batman']").addClass('shown');
	
	var name = $('img').attr('title');
	
	$('h1').text(name);
	
	$("button[class='next']").click(function(){
 		$("img[alt='Batman']").removeClass('shown');
	});


});



