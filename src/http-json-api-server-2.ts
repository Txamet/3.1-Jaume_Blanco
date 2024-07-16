const http13 = require("http");
const url = require("url");

http13.createServer((req: any, res: any) => {
    const newUrl = new URL(req.url, "http://localhost:3000");
    let urlPathName = newUrl.pathname; 
    let urlTime: any = newUrl.searchParams.get("iso");
    let stringTime = new Date(urlTime);
    
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
    
}).listen(3000);

http13.get(process.argv[2], (response: any) => {
  response.on("data", (data: any) => {
      console.log(data.toString());
  })
})


