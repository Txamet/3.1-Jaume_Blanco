const http12 = require("http");
const fs12 = require("fs");

const options = {
  method: "POST",
  port: process.argv[2]
}

http12.createServer((req: any, res: any) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const stream = fs12.createReadStream("./lectura.txt");
  stream.pipe(res)  
}).listen(process.argv[2]);

http12.get(options, (res: any) => {
  let body: string = "";

  if (options.method  === "POST") {
  res.on("data", (chunk: any) => {
    body += chunk.toString().toUpperCase();
  });

  res.on("end", () => {
    console.log(body)
  });

  } else {
    console.error("Send me a POST request")
  }
})
