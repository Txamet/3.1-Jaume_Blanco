const http9 = require('http');
const fs9 = require("fs");
const bl9 = require('bl');

const box: any = [];
let sum: number = 0;

http9.createServer((req: any, res: any) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const stream = fs9.createReadStream("./lectura.txt");
  stream.pipe(res)
}).listen(3000);

http9.createServer((req: any, res: any) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const stream = fs9.createReadStream("./lectura2.txt");
  stream.pipe(res)
}).listen(3001);

http9.createServer((req: any, res: any) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const stream = fs9.createReadStream("./lectura3.txt");
  stream.pipe(res)
}).listen(3002);

for (let i = 0; i <= 2; i++) {
    
    const url = http9.get(process.argv[2 + i], (response: any) => {
        response.pipe(bl9((err: any, data: any) => {
            if (err) return console.log(err);

            box[i] = data.toString();
            sum++;
            
            if (sum == 3) {
              console.log("\nFIRST URL:\n\n", box[0])
              console.log("\nSECOND URL:\n\n", box[1])
              console.log("\nTHIRD URL:\n\n", box[2])
            }
        }))
    })
}
