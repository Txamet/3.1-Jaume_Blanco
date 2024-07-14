const http8 = require('http');
const fs8 = require("fs");
const bl = require('bl');

http8.createServer((req: any, res: any) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const stream = fs8.createReadStream("./lectura.txt");
  stream.pipe(res)
}).listen(3000);

http8.get(process.argv[2], (response: any) => {
    response.pipe(bl((err: any, data: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Number of characters: ", data.toString().length, "\n");
            console.log(data.toString(), "\n");
        }    
    }))
    
})
