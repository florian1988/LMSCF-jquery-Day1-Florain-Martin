$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});



if(typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
}


$(document).ready(function(){

	// $("form").remove();

	$("article").prepend("<div>div").prepend("<br>");
	$("article").prepend("<div>div").prepend("<br>");
	$("article").prepend("<div>div").prepend("<br>");
	$("article").prepend("<div>div").prepend("<br>");
	$("article").prepend("<div>div").prepend("<br>");

	$("input").val("search for...");
	$("div").addClass("box");

	$("footer > p > a").attr("href", "https://codefactory.wien/de/home/")
});
