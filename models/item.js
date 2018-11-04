const mongoose = require('mongoose');


var item = mongoose.model('List',{
	text : {
		type: String , 
		required : true,
		minlength : 1,
		trim : true
	},
	itemType :{
		type : String,
		default : "food"

	},
	price : {
		type : Number,
		default : 50,
		required : true
	}
})



module.exports = {
	item
}