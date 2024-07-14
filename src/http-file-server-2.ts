const http11 = require("http");
const fs11 = require("fs");
const bl11 = require('bl');

http11.createServer((req: any, res: any) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const stream = fs11.createReadStream(process.argv[3]);
    stream.pipe(res);
}).listen(process.argv[2]);

http11.get("http://localhost:" + process.argv[2] + "/", (response: any) => {
    response.on("data", (data: any) => {
        console.log(data.toString());
    })
})
