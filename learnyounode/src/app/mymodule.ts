const fs6 = require("fs");
const path6 = require("path");

module.exports = function myModule(directory: string, extension: string, callback: Function) {
    const files = fs6.readdir(directory, (err: any, data: any) => {
        if (err) {
            return callback(err)
        }

        let list: any = [];

        for (let i = 0; i < data.length; i++) {
            if (path6.extname(data[i]) === "." + extension) {
                list.push(data[i]);
            }
        }

        return callback(null, list);
        
    });
}

/* SOLUCIÓN OFICIAL .JS

const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/