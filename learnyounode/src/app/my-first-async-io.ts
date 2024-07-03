const fS = require('fs');

const buff: Buffer = fS.readFile(process.argv[2], 'utf8', (err: any, data: any) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        let str = data.toString().split("\n").length -1;     
        console.log(str);
    };
});