var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');

var db = mongoose.connection;

//if error
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
// yay! Success
	console.log("Connected to mongodb successfully. Fuck yea.");
	kittySchema = mongoose.Schema({
		name: String
	});

	Kitten = mongoose.model('Kitten', kittySchema);

	silence = new Kitten({ name: 'poop' });
	console.log(silence.name); // 'Silence'
});