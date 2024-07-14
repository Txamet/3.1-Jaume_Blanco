const http13 = require("http");
const url = require("url");

http13.createServer((req: any, res: any) => {
    const newUrl = new URL(req.url, "http://example.com");
    let urlPathName = newUrl.pathname; 
    let urlTime: any = newUrl.searchParams.get("iso");
    let stringTime = new Date(urlTime)
    
    let time: any;

    if (urlPathName === "/api/parsetime") {
        time = {
            "hour": stringTime.getHours(),
            "minute": stringTime.getMinutes(),
            "second": stringTime.getSeconds()
        }    
    } else if (urlPathName === "/api/unixtime") {
        time = {
            "unixtime": stringTime.getTime()
        } 
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    let result = JSON.stringify(time);
    res.end(result)
    
}).listen(process.argv[2]);


  /* SOLUCIÓN OFICIAL .JS

      'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

    */
