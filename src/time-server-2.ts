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


let totalDate = `${newYear}-${newMonth}-${newDate} ${newHours}:${newMinutes}\n`;

const server = net.createServer((socket: any) => {
  //socket.write(totalDate);
  socket.end(totalDate);
})
server.listen(process.argv[2]);
