"use strict";
const file = require('fs');
const path = require('path');
const directory = file.readdir(process.argv[2], (err, data) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        let list = "";
        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === "." + process.argv[3]) {
                list += data[i] + "\n";
            }
        }
        console.log(list);
    }
});
//# sourceMappingURL=filtered-ls.js.map