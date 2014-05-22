var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
  if (err) throw err
  data = data.toString().split('\n');
  console.log(data.length -1);
});

