var fs = require('fs');
var path = require('path');

module.exports = function(filepath, ext, fn){
  var filesArray = []
  fs.readdir(filepath, function(err, files){
    if (err) return fn(err);
    for(var i = 0; i < files.length; i++){
      if (path.extname(files[i]) == '.'+ ext)
        filesArray.push(files[i]);
    }
  fn(null, filesArray);
  });
};
