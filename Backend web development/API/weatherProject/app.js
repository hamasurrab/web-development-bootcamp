const { json } = require("express");
const express=require("express");
const https=require("https");

const app=express();


app.get("/",function(req,res){
    const url="https://openweathermap.org/?city=noida&appid=7279746&units=matric";
    https.get(url,function(response){
    console.log(response.statusCode);


    response.on("data",function(data){
        const weatherData=JSON.parse(data)
    console.log(weatherData);
    })

    })
res.send("server is up and running")
});








app.listen(3000,function(){
    console.log("Server is runnning on port 3000.")
});