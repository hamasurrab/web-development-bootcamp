//jshint esversion:6
const express =require("express");
const app =express();

// route
app.get("/",function(req,res){
    
    res.sendFile(__dirname + "/index.html");
});



app.listen(3000,function(){
    console.log("server started on port 3000");
});