if(typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
}


$("document").ready(function(){

$("a").attr("href", "https://codefactory.wien/de/home/");


$("code").css("background-color", "red");

$("ol > li").css("background-color", "#2a7b90");

$("input").val("Express our opinion");

$("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");


$("blockquote").css({"background-color": "orange","font-style": "italic"});

$("#logo").css("color", "black");

$(".gray").css("color", "white");   

$(".date").remove();


$("#sidebar > ul ").append("<li><a href='https://codefactory.wien/de/home/'>New Templates</a></li>");
$("#sidebar > ul ").append("<li><a href='https://codefactory.wien/de/home/'>Order Templates</a></li>");
$("#sidebar > ul ").append("<li><a href='https://codefactory.wien/de/home/'>Contact Us</a></li>");


// $("p:contains('&quot;')").css('color', 'red');
$( "p:contains('Be not afraid')" ).text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

});






