const file = require('fs');
const path = require('path');

const directory: Buffer = file.readdir(process.argv[2], (err: any, data: any) => {
    if (err) {
        console.log("Error: ", err);

    } else {
        let list: string = "";

        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === "." + process.argv[3]) {
                list += data[i] + "\n";
            } 
        }    

        console.log(list);
    }    
})