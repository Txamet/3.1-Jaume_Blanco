"use strict";
const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString().split('\n').length - 1;
console.log(str);
//# sourceMappingURL=my-first-io.js.map