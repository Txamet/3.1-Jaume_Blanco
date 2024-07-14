const http11 = require("http");
const fs11 = require("fs");
const bl11 = require('bl');

const server11 = http11.createServer((req: any, res: any) => { 
    const stream = fs11.createReadStream(process.argv[3]);
    stream.pipe(res)
});

server11.listen(process.argv[2])

/* SOLUCIÓN OFICIAL .JS

'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/