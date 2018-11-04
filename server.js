var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var {mongoose} = require('./db/mongoose');
var port = process.env.PORT || 3000;
app.get('/apis',(req,res)=>{
	res.send("<h1> APis </h1>")
})
app.use(bodyParser.json());




app.listen(port , ()=>{
	console.log("Running on port 3000")
})
