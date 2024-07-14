const http9 = require('http');
const bl9 = require('bl');

const box: any = [];
let sum: number = 0;

for (let i = 0; i <= 2; i++) {
    
    const url = http9.get(process.argv[2 + i], (response: any) => {
        response.pipe(bl9((err: any, data: any) => {
            if (err) return console.log(err);

            box[i] = data.toString();
            sum++;
            
            if (sum == 3) {
                console.log(box[0])
                console.log(box[1])
                console.log(box[2])
            }
        }))
    })
}


/* SOLUCIÓN OFICIAL .JS

'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}

*/