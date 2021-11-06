const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");


const app =express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));




// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/signup.html");
// });


// app.post("/",function(req,res){
// var firstName=req.body.fname;
// var lastName=req.body.lname;
// var email=req.body.email;
// console.log(firstName,lastName,email);


// });

app.get("/",function(req,res){
  
});


// api -key =477c63c314094fc2713b79de854b4345-us5





app.listen(3000,function(){
    console.log("server is running on port 3000");
});




//API KEY 
// a46b24f456d59ecbacbbf9a195026b8e-us5