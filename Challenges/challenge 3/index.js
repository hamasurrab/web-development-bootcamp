prompt("Enter your name ");
prompt("enter your crush name?");

var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1;
if(loveScore>70){
    alert("Hey! your loveScore is"+loveScore+"%😀😀")
    document.querySelector("h4").innerHTML="All the best!";
}
else if(loveScore>30 && loveScore<70){
    alert("Hey! your loveScore is"+loveScore+"%👍🏻👍🏻")
    document.querySelector("h4").innerHTML="Don't worry try harder!";   
}
else{
    alert("Hey! your loveScore is"+loveScore+"%😪😪")
    document.querySelector("h4").innerHTML="Try another person!";
}


