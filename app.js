var http = require('http');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');

var db = mongoose.connection;

//if error
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
// yay! Success
	console.log("Connected to mongodb successfully. Fuck yea.");
	var kittySchema = mongoose.Schema({
		name: String
	});

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({ name: 'poop' });
	console.log(silence.name); // 'Silence'
});

http.createServer(function (request, response) {
	
  	var name = request.url.replace('/', "");
  	response.writeHead(200, {'Content-Type': 'text/plain'});
  	response.end('Hello World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');