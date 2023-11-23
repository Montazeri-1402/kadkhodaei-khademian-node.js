var http = require('http');
const port = 8080;
http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('hello world!');

})
console.log('Server listening on ${port}');