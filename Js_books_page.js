$(document).ready(function(){
$("button").click(function(){
var x=$("textarea").val();
var y=$("<p></p>").prepend(x);

$(".comment").append(y);
$("textarea").val("");
});
});
