const express=require("express");
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");

const app=express();
 items=["buy food","cook food", "eat food" ,"play cricket"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static( "views"));

app.set('view engine', 'ejs');





app.get("/",function(req,res){

var today=new Date();
//______________________________________________________________________________________________________________
// var currentDay=today.getDay();


// var day="";
//_____________________________________________________________________________________________________________

var option={
    weekday:"long",
    day:"numeric",
    month:"long"
};

// if(currentDay==6 || currentDay==0)
// {
//     day="weekened";
//     //res.send("<h1>hey it's a weekened!</h1>");
// }
// else{
//     day="weekdays";
//    // res.send("<h1>shit i have to go college!</h1>");
// }

//______________________________________________________________________________________________________




// switch (currentDay) {
//     case 0:
//         day="sunday";
//         break;
//         case 1:
//         day="monday";
//         break;
//         case 2:
//         day="tuesday";
//         break;
//         case 3:
//         day="wednesday";
//         break;
//         case 4:
//         day="thursday";
//         break;
//         case 5:
//         day="friday";
//         break;
//         case 6:
//         day="saturday";
//         break;

//     default:
//         console.log("error:current day is equal to"+ currentDay);
//         break;
// }

//_____________________________________________________________________________________________________________________
// for english
var day=today.toLocaleDateString("en-US",option);

// "hi-IN": For Hindi
// var day=today.toLocaleDateString("hi-IN",option);


res.render('list', {KindOfDay: day, newListItems: items});


});


app.post("/",function(req,res){
   var item=req.body.newItem;
items.push(item);

    res.redirect("/");
});





app.listen(3000,function(){
    console.log("server is running on port 3000");
});