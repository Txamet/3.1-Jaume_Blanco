const http12 = require("http");
const map = require("through2-map");

http12.createServer((req: any, res: any) => {
    if (req.method !== "POST") return res.end("Send me a POST\n")

    req.pipe(map((chunk: any) => {
      return chunk.toString().toUpperCase()
    })).pipe(res);

}).listen(process.argv[2]);

http12.post("http://localhost:" + process.argv[2] + "/", (response: any) => {
  response.on("data", (data: any) => {
      console.log(data.toString());
  })
})


/* SOLUCIÓN OFICIAL .JS

    'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/    