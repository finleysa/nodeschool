var server = require('http'),
    bl = require('bl');

server.get(process.argv[2], function(first) {
  server.get(process.argv[3], function(second) {
    server.get(process.argv[4], function(third) {
      first.pipe(bl(function(err, data1) {
        second.pipe(bl(function(err, data2) {
          third.pipe(bl(function(err, data3) {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
          }));
        }));
      }));
    });
  });
});
