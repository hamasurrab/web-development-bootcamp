// var randomNumber1=Math.random()*6;
// randomNumber1=Math.floor(randomNumber1)+1;   //num 1-6//


// var randomDiceImage="dice" +randomNumber1+ ".png"; //dice(1-6).png//

// var randomImageSources="images/"+randomDiceImage; //imagesdice1.png-imagesdice6.png//

// var image1=document.querySelectorAll("img")[0];
// image1=SetAttribute("src", randomImageSources);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "images/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// if(randomNumber1>randomNumber2){
// document.querySelector("h1").innerHTML="player 1 wins";}
// else if(randomNumber2>randomNumber1){
// document.querySelector("h1").innerHTML="player 2 wins";}
// else
// {
// document.querySelector("h1").innerHTML="Draw";
// }
//----------------------------------------for 1st image-----------------------------------------------------------------//
var randomNumber1 =Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage1 ="images/dice"+randomNumber1+".png";

var image1 =document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

//-----------------------------------------for 2nd image-------------------------------------------------------------
 var randomNumber2 =Math.random()*6;
 randomNumber2=Math.floor(randomNumber2)+1;

 var randomDiceImage2 ="images/dice"+randomNumber2+".png";
 var image2 =document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

 //----------------------------------now condition----------------------------------------------------------------
 if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML="👲🏽player 1 wins";
 }
 else if(randomNumber2>randomNumber1){
     document.querySelector("h1").innerHTML="player 2 wins🧔🏽";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
