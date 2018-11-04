const mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
const URL = "mongodb://admin:admin123@ds151513.mlab.com:51513/itemlist";
mongoose.connect(URL , {useNewUrlParser : true});


module.exports = {
	mongoose
}