const http8 = require('http');
const bl = require('bl');

http8.get(process.argv[2], (response: any) => {
    response.pipe(bl((err: any, data: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data.toString().length)
            console.log(data.toString());
        }    
    }))
})

/* SOLUCIÓN OFICIAL .JS

    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/