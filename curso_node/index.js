var http = require('http');

http.createServer(function(req,res){
    res.end('hellor world');
}).listen(3000);