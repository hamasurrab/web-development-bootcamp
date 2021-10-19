//jshint esversion:6
const express =require("express");
const app =express();

// called route
app.get("/",function(req,res){
    // console.log(req);
    res.send("hello");
});

//another route
app.get("/contact",function(req,res){
    
    res.send("contact me at: hamaschaudhary1154@gmail.com");
});

//another route
app.get("/about",function(req,res){
    
    res.send("about me: hey i am hamas chaudhary , i am student of btech cse from iimt group of colleges.");
});


//another route
app.get("/hobbies",function(req,res){
    res.send("<ul><li>playing cricket</li><li>coding</li></ul>")
})





app.listen(3000,function(){
    console.log("server started on port 3000");
});