const express =require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
const query=req.body.cityName;
const apiKey="d8f6fdc14ae0b2a2136119b0ebc9a397";
const unit="metric"
const url="https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units="+unit+"&appid="+apiKey;

https.get(url,function(response){
console.log(response.statusCode);

response.on("data",function(data){
// console.log(data);
const weatherData=JSON.parse(data);
// console.log(weatherData);
const temp=weatherData.main.temp;
const weatherDescription=weatherData.weather[0].description;
const icon=weatherData.weather[0].icon
const imgUrl="http://openweathermap.org/img/wn/"+ icon+"@2x.png";

//if multiple {res.send} bhejna ho to use [res.write]

res.write("<h1>The Temp of "+ query+" is "+ temp+" degree celcius.</h1>");
res.write("<h3>the weatherDescription in "+ query+" is "+ weatherDescription +"</h3>");
res.write("<img src" + imgUrl +">");
res.send();

});
});


//we can only use one {res.send} in code so we commented this res
// res.send("TEMP LOOKS COOL TODAY.")


});



app.listen(2000,function(){
    console.log("server is running on port 2000.");
});

