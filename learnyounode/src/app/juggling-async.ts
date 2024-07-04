const http9 = require('http');
const bl9 = require('bl');

const box: any = [];

for (let i = 2; i <= 4; i++) {
    
    const url = http9.get(process.argv[i], (response: any) => {
        response.pipe(bl9((err: any, data: any) => {
            if (err) {
                console.log(err);
    
            } else {
                data.toString();
                //console.log(data.toString());            
            }
        }))
    })
    box.push(url)
}

box[0]



