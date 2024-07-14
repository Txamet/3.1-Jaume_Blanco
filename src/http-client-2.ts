const http = require('http');
const fs7 = require("fs");


http.createServer((req: any, res: any) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const stream = fs7.createReadStream("./lectura.txt");
    stream.pipe(res)
}).listen(3000);

http.get(process.argv[2], (response: any) => {
    response.on("data", (data: any) => {
        console.log(data.toString());
    })
})
