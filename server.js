var express = require('express');
var bodyParser = require('body-parser');
var {item} = require('./models/item');
var {mongoose} = require('./db/mongoose');

var app = express();
var port = process.env.PORT || 3000;
app.get('/apis',(req,res)=>{
	res.send("<h1> APis </h1>")
})
app.use(bodyParser.json());

app.post('/items',(req , res)=>{
	var body = req.body;
	var newItem = new item({
		text : body.text,
		itemType : body.itemType,
		price : body.price

	})

	newItem.save().then((doc)=>{
		res.send(doc)

	},(e)=>{
		res.status(400).send(e)
	})
})

app.get('/items',(req,res)=>{
	item.find().then((items)=>{
		res.send({items})
	},(e)=>{
		res.status(400).send(e);
	})
})



app.listen(port , ()=>{
	console.log("Running on port 3000")
})
