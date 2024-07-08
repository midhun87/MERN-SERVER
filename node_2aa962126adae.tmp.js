const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // headers
    response.end('Hello World\n');
    // payload
}).listen(6777, () => console.log("Server Live"));

// Listen takes (Port Number, error handling) Node.js v20.15.0