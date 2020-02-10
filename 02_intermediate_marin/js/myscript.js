
$(document).ready(function(){
	
	$('form').remove();

	for (let i = 0; i < 5; i++) {
		$('article').append('<div>Div ' + (i+1) + '</div>');
	}

	$('div').addClass('box');

	$('a').attr("href", "www.codefactory.wien");

	$("form").submit(function(e) {
		e.preventDefault();
	});

});




