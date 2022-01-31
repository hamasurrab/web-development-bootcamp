var randomNum1=Math.random()*6;
randomNum1=Math.floor(randomNum1)+1;


var randomImage1="images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


var randomNum2=Math.random()*6;
randomNum2=Math.floor(randomNum2)+1;

var randomImage2="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="1";

}
if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="2";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}