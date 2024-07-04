const http = require('http');

http.get(process.argv[2], (response: any) => {
    response.on("data", (data: any) => {
        console.log(data.toString());
    })
})

/*SOLUCIÓN OFICIAL .JS

'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)

*/
