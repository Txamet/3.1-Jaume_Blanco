const fs6 = require("fs");
const path6 = require("path");

export function myModule(directory: string, extension: string, callback: Function) {
    const files = fs6.readdir(directory, (err: any, data: any) => {
        if (err) {
            return callback(err)
        }

        let list: any = [];

        for (let i = 0; i < data.length; i++) {
            if (path6.extname(data[i]) === "." + extension) {
                list.push(data[i]);
            }
        }

        return callback(null, list);
        
    });
}
