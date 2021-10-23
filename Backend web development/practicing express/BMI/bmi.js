const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    var weight=(req.body.weight);
    var height=(req.body.height);
    var result= weight/(height*height);
    res.send("the calculation of BMI is "+ result);
});



app.listen(3002,function(req,res){
    console.log("server is running on port 3002");
});
