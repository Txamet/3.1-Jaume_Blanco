const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], (err: any, data: any) => {
    if (err) {
        return console.log("Error: ", err);

    } else {
        console.log(data.join("\n"))
    }
});

/* SOLUCIÓN OFICIAL .JS

const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
