var net = require('net'),
    port = process.argv[2];

var server = net.createServer(function(socket) {
  var date = new Date();

  var day = date.getDate().toString();
  var month = (date.getMonth() + 1).toString();
  if(month.length == 1){
    month = '0' + month;
  }
  var year = date.getFullYear().toString();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  socket.end(year+'-'+month+'-'+day+' '+hours+':'+minutes+"\n");
});

server.listen(port);
