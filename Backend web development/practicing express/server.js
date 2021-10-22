const express=require("express");
const app=express();


app.get("/",function(req,res){
// console.log(req);
res.send("server is running on port 3000");
});

app.listen(3000,function(){
    console.log("server is started on port 3000");
});