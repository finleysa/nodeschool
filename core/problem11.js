var http = require('http'),
    port = process.argv[2],
    map = require('through2-map');

var server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'application/json' });
});

server.listen(port);
