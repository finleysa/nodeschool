var myModule = require('./problem6helper');

myModule(process.argv[2], process.argv[3], function(err, data){
  data.forEach(function(file){console.log(file);});
});
