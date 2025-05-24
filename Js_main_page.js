$(document).ready(function(){
$(".map").dblclick(function(){
$(".map").slideToggle();
});

$(".imagehide").click(function(){
$(".map").slideToggle();
});
$(".pull").click(function(){
$(".control").animate({width:'toggle'});
});

$(".bold").click(function(){
$("p").toggleClass("bold");
});
$(".italic").click(function(){
$("p").toggleClass("italic");
});
$(".underline").click(function(){
$("p").toggleClass("underline");
});


});

