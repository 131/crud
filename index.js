"use strict";

const path = require('path');
const fs   = require('fs');

const mkdirpSync = require('nyks/fs/mkdirpSync');

var staticcb = function(root) {

  var route = function(req, res) {

    let filename = path.resolve(req.url);
    let file_path = path.join(root, filename);

    if(req.method == "GET") {
      if(!fs.existsSync(file_path)) {
        res.statusCode = 404;
        res.end();
        return;
      }
      let file = fs.createReadStream(file_path);
      file.pipe(res);
      return;
    }

    if(req.method == "PUT") {
      mkdirpSync(path.dirname(file_path));
      let file = fs.createWriteStream(file_path);
      req.pipe(file);
      file.on("finish", () => res.end());
    }

    if(req.method == "DELETE") {
      if(fs.existsSync(file_path))
        fs.unlinkSync(file_path);
      res.end();
    }

  };
  return route;
};


module.exports = {static : staticcb};
