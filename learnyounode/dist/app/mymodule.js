"use strict";
const fs6 = require("fs");
const path6 = require("path");
module.exports = function myModule(directory, extension, callback) {
    const files = fs6.readdir(directory, (err, data) => {
        if (err) {
            return callback(err);
        }
        let list = [];
        for (let i = 0; i < data.length; i++) {
            if (path6.extname(data[i]) === "." + extension) {
                list.push(data[i]);
            }
        }
        return callback(null, list);
    });
};
//# sourceMappingURL=mymodule.js.map