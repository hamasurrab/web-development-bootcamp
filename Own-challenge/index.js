var whoIs=Math.random()*2;
whoIs=Math.floor(whoIs)+1;
var randomImage="image/"+whoIs+".jpg";
var image=document.querySelectorAll("img")[0].setAttribute("src",randomImage);