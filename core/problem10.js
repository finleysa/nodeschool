var http = require('http'),
    port = process.argv[2],
    fs = require('fs');

console.log(process.argv[3]);

var server = http.createServer(function (req, res){
  fs.createReadStream(process.argv[3]).pipe(res)
});

server.listen(port);
