const mymodule = require("./mymodule-2");

mymodule(process.argv[2], process.argv[3], (err: any, data: any) => {
    if (err) {
        return console.log("Error: ", err);

    } else {
        console.log(data.join("\n") + "\n")
    }
});
