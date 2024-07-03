"use strict";
const mymodule = require("./mymodule");
mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return console.log("Error: ", err);
    }
    else {
        console.log(data.join("\n"));
    }
});
//# sourceMappingURL=make-it-modular.js.map