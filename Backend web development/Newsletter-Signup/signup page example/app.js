const express =require("express");
const bodyParser=require("body-parser");
const request=require("request");

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

// var firstName=req.body.fName;
// var lastName=req.body.lName;
// var email=req.body.Email;

// console.log(firstName,lastName,email);

const {firstName,lastName,email} = req.body;

//make sure fields are fielled
if(!firstName|| !lastName|| !email){
    res.redirect("failure.html");
    return;
}


//construct req data
const data={
    members:[
        {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FName:firstName,
                LName:lastName
            }
        }
    ]
}


const postData=JSON.stringify(data);






const options={
    url:"https://${us5}.api.mailchimp.com/lists/4d33a30303",
    method:"POST",
    Headers:{
        authorization:"auth aef01a1c743877d9affb85d26db458a4-us5"
    },
    body:postData
}



request(options,function(err,response,body){
    if(err){
        res.redirect("/failure.html");
    }else{
        if(response.statusCode===200){
           res.redirect("success.html"); 
        }else{
            res.redirect("/failure.html");
        }
    }

});

});


app.listen(3000,function () {
    console.log("port is ruuning on port 3000");
});





//api key aef01a1c743877d9affb85d26db458a4-us5
// audience id 4d33a30303





// dc="YOUR_DC"
// apikey="YOUR_API_KEY"

// curl -sS \
//   "https://${dc}.api.mailchimp.com/3.0/ping" \
//   --user "anystring:${apikey}" | jq -r