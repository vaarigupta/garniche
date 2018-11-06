var express = require('express');
var bodyParser = require('body-parser');
var {item} = require('./models/item');
var {mongoose} = require('./db/mongoose');
var {ObjectID} = require('mongodb');

var app = express();
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
	res.send("<h1> Garniche </h1>")
})


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


app.get('/items/:id',(req,res)=>{
	var id = req.params.id;
	if(ObjectID.isValid(id))
	{
		item.findById(id).then((item)=>{
			if(!item)
			{
				return res.send(404 , "Item not found with given ID");
			}
			res.send(200,`My Item : ${item}`);

		} )
	}

	else
	{
		res.send(404 , "Invalid ID");
	}


})
app.listen(port , ()=>{
	console.log("Running on port 3000")
})
