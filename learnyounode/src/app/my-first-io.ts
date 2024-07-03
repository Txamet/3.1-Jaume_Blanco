const fs = require('fs');

const buf: Buffer = fs.readFileSync(process.argv[2]);
const str = buf.toString().split('\n').length - 1;

console.log(str);

