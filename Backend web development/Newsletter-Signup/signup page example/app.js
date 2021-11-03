const express =require("express");
const bodyParser=require("body-parser");

const app =express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));





// app.get("/",function(req,res){
//     res.send("running");
// });


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");

});


app.post("/",function(req,res){

var firstName=req.body.fName;
var lastName=req.body.lName;
var email=req.body.Email;

console.log(firstName,lastName,email);
})


app.listen(3000,function () {
    console.log("port is ruuning on port 3000");
});