var server = require('http'),
    bl = require('bl'),
    url = process.argv[2];

server.get(url, function(data) {
  data.pipe(bl(function(err, data){
    console.log(data.length);
    console.log(data.toString());
  }));
});
