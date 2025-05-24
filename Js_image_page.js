$(document).ready(function(){
$("img").click(function(){
$("img").hide("slow");
$(this).show("fast").addClass("big");
$(".normal").show("fast");
});
$(".normal").click(function(){
$(".normal").hide("fast");
$("img").removeClass("big");
$("img").show();
$("div").hide("fast");
});
$(".one").click(function(){
$(".descri").slideDown(2000);

});
$(".two").click(function(){
$(".twos").slideDown(2000);});
$(".three").click(function(){
$(".threes").slideDown(2000);});
$(".four").click(function(){
$(".fours").slideDown(2000);});

});