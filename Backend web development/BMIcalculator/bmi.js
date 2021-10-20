const express =require("express");
const bodyParser=require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
// route
app.get("/BMIcalculator",function(req,res){
    
    res.sendFile(__dirname + "/indexx.html");
});

app.post("/",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=(n1*n1)/n2;
    res.send("the result of calculation is "+ result);
    });
    
    
    
    app.listen(3000,function(){
        console.log("server started on port 3000");
    });