const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");




const app=express();
app.use(bodyParser.urlencoded({extended:true}));






app.get("/",function(req,res){


   
    const url="https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=d8f6fdc14ae0b2a2136119b0ebc9a397";
    https.get(url,function(response){
console.log(response);


response.on("data",function(data){
    const weatherData=JSON.parse(data)
    console.log(weatherData);


const weatherDescription=weatherData.weather[0].description;
const temp=weatherData.main.temp;

res.write("<h1>temp is "+temp+"degree celcius.</h1>");
res.write("<h3>the weather ddescription is "+weatherDescription+"</h3>");
res.send();



});

    });
    
});






app.listen(3000,function(){
    console.log("port is runnig on port 3000");
});