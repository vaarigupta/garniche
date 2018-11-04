const mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
const URL = "mongodb://localhost:27017/List";
mongoose.connect(URL , {useNewUrlParser : true});


module.exports = {
	mongoose
}