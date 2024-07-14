const net = require("net");

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

let newYear = date.getFullYear();
let newMonth = (month < 10) ? "0" + month : month;
let newDate = (day < 10) ? "0" + day : day;
let newHours = (hours < 10) ? "0" + hours : hours;
let newMinutes = (minutes < 10) ? "0" + minutes : minutes;


let totalDate = `${newYear}-${newMonth}-${newDate} ${newHours}:${newMinutes}\n`

const server = net.createServer((socket: any) => {
    socket.write(totalDate);
    socket.end();
})
server.listen(process.argv[2]);

/* SOLUCIÓN OFICIAL .JS

'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

    */