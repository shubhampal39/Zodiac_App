const express=require('express')//load express module ..express is method here
const app=express(); //intialize 
app.use(express.static(__dirname + '/client'));

//setup Environment Variable
const port=process.env.PORT||3000;

app.listen(port,()=>{
	console.log("connected on server " +port);
});
