const expess=require("express");
const bodyParser=equire("body-parser");


const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));





app.get("/",function(req,res){
    res.send("hey our port is runnng");
})




app.get("/", function(req,res){
    res.sendFile(--dirname+"/index.html");
});




app.post("/",function(req,res){

var firstName=fname;
var lastName=lName;
var email=email;


console.log(fname,lName,email);

})


app.listen(3000,function(){
    console.log("port is running oport 3000");
});