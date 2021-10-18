$("h1").css("color","green");
$("h1").click(function(){
    $("h1").css("color","purple");
})



$("button").click(function(){
    $("h1").css("color","yellow");

});


// challenge press any key and it show on screen in place of h1

$(document).keypress(function(event){
    $("h1").text(event.key);
});

// always use .on in function part and trying animation on website


$("button").on("click",function(){
$("h1").toggle();
});