"use strict";
let result = 0;
let i;
for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}
console.log(result);
//# sourceMappingURL=baby-steps.js.map