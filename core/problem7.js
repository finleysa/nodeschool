var server = require('http');

var site = process.argv[2];

server.get(site, function(info){
  info.setEncoding('utf-8');
  info.on("data", function(data){
    console.log(data);
  });
});
