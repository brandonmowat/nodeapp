var http = require('http');
require('./db.js');

http.createServer(function (request, response) {

  	var name = request.url.replace('/', "");
  	response.writeHead(200, {'Content-Type': 'text/plain'});
  	console.log(silence.name); // 'Silence'
  	response.end('Hello World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');