var whoIs=Math.random()*2;
whoIs=Math.floor(whoIs)+1;

var randomImage="image/"+whoIs+".jpg";
var image=document.querySelectorAll("img")[0].setAttribute("src",randomImage);
if(whoIs=1){
    document.querySelector("h1").innerHTML="chaudhary saifurrab";
}
else {
    document.querySelector("h1").innerHTML="chaudhary Hamasurrab";
}