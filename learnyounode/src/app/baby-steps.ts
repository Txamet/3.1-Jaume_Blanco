let result: number = 0;
let i: number;

for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}

console.log(result);