var whoIs=Math.random()*3;
whoIs=Math.floor(whoIs)+1;

var randomImage="image/"+whoIs+".jpg";
var image=document.querySelectorAll("img")[0].setAttribute("src",randomImage);
if(whoIs<2){
    document.querySelector("h1").innerHTML="Shahrukh khan";
    document.querySelector("p").innerHTML=" World famous Actor";
}
else if(whoIs==2) {
    document.querySelector("h1").innerHTML="Cristiano ronaldo";
    document.querySelector("p").innerHTML="footballer";
}
else{
    document.querySelector("h1").innerHTML="Anushka sharma";
    document.querySelector("p").innerHTML="Indian Actress";
}