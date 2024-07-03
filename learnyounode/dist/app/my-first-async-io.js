"use strict";
const fS = require('fs');
const buff = fS.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log("Error: ", err);
    }
    else {
        let str = data.toString().split("\n").length - 1;
        console.log(str);
    }
    ;
});
//# sourceMappingURL=my-first-async-io.js.map