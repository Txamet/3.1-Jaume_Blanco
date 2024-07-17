import fs from 'fs';
import path from 'path';
import  { myModule }  from "../src/mymodule-2";
import http from 'http';
import bl from 'bl';
import url from "url";
import net from "net";

const server = http.createServer((req: any, res: any) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const stream = fs.createReadStream("./lectura.txt");
    stream.pipe(res)
}).listen(3000);

const server2 = http.createServer((req: any, res: any) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const stream = fs.createReadStream("./lectura2.txt");
    stream.pipe(res)
}).listen(3001);

const server3 = http.createServer((req: any, res: any) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const stream = fs.createReadStream("./lectura3.txt");
    stream.pipe(res)
}).listen(3002);

describe("Testing baby-steps", () => {
    test("Should work properly", () => { 
        let result: number = 0;
        let i: number;
        let array = [1, 2, 3, 5, 7]

        for (i = 2; i < array.length; i++) {
            result += Number(array[i]);
        }

        expect(result).toBe(15);
    });    
});

describe("Testing my-first-io", () => {
    test("Should work properly", () => {    
        const buf: Buffer = fs.readFileSync("./lectura.txt");
        const result = buf.toString().split('\n').length - 1;

        expect(result).toBe(10);
    })
});

describe("Testing my-first-async-io", () => {
    test("Should work properly", done => {
        fs.readFile("./lectura.txt", 'utf8', (err: any, data: any) => {
            if (err) {
                console.error("Error: ", err);
            } else {
                let str = data.toString().split("\n").length -1; 
                expect(str).toBe(10);
                done();    
            };
        });
    })
})

describe("Testing filtered-ls", () => {
    test("Should work properly", done => {
        fs.readdir("./learnyounode", (err: any, data: any) => { 
            if (err) {
                console.error("Error: ", err);
            } else {
            let list: string = "";
        
            for (let i = 0; i < data.length; i++) {
               if (path.extname(data[i]) === "." + "md") {
                    list += data[i];
                } 
            }    

            expect(list).not.toMatch(/CHANGE.md/);
            expect(list).toMatch(/LICENSE.md/);
            expect(list).toMatch(/README.md/);
            done();
            };
        });
    });
});

describe("Testing make-it-modular", () => {
    test("Should work properly", done => {
        myModule("./learnyounode", "md", (err: any, data: any) => {
            if (err) {
                return console.error("Error: ", err);
        
            } else {
                let list: string = data.join("\n") + "\n"

                expect(list).not.toMatch(/CHANGE.md/);
                expect(list).toMatch(/LICENSE.md/);
                expect(list).toMatch(/README.md/);
                done();                
            };
        });
    });
});

describe("Testing http-client", () => {
    test("Should work properly", done => {
        http.get("http://localhost:3000/", (response: any) => {
            response.on("data", (data: any) => {
                let result = data.toString();
                expect(result).toMatch(/Una funció debounce és una tècnica per controlar la freqüència/);  
                expect(result).not.toMatch(/Jaume/); 
                done();  
            });
        });
        
    },);
});

describe("Testing http-collect", () => {  
    test("Should work properly", done => {       
        http.get("http://localhost:3000/", (response: any) => {
            response.pipe(bl((err: any, data: any) => {
                if (err) {
                    console.error(err);
                } else {
                    let characters: number = data.toString().length;
                    let result = data.toString();

                    expect(characters).toBe(595);
                    expect(result).toMatch(/Una funció debounce és una tècnica per controlar la freqüència/);
                    expect(result).not.toMatch(/Jaume/);
                    done();
                }    
            }))  
        })
    });   
});

describe("Testing juggling-async", () => {
    test("Should work properly", done => {
        const box: any = [];
        let sum: number = 0;

        for (let i = 0; i <= 2; i++) {
    
            http.get("http://localhost:300" + i + "/", (response: any) => {
                response.pipe(bl((err: any, data: any) => {
                    if (err) return console.log(err);
                    

                    box[i] = data.toString();
                    sum++;
                    
                    if (sum == 3) {
                        expect(box.length).toBe(3);
                        expect(box[0]).toContain("Una funció debounce és una tècnica per controlar la freqüència");
                        expect(box[1]).toContain("La funció throttle serveix per limitar la freqüència");
                        expect(box[2]).toContain("La funció memoize permet optimitzar el rendiment");
                        expect(box[0]).not.toContain("Jaume");
                        expect(box[1]).not.toContain("Jaume");
                        expect(box[2]).not.toContain("Jaume");
                        done();
                    };
                }));
            });
        };
    });
});

describe("Testing time-server", () => {
    test("Should work properly", done => {
        
    })
})

describe("Testing http-file-server", () => {
    test("Should work properly", done => {
        http.get("http://localhost:3000/", (response: any) => {
            response.on("data", (data: any) => {
                let result: string = data.toString();

                expect(result).toMatch(/Una funció debounce és una tècnica per controlar la freqüència/);
                expect(result).not.toMatch(/Jaume/);
                done();
            });
        });
    });
});

describe("Testing http-upercaserer", () => {
    test("Should work properly", done => {
        const options = {
            method: "POST",
            port: 3000
        };

        http.get(options, (res: any) => {
            let body: string = "";
          
            if (options.method  === "POST") {
            res.on("data", (chunk: any) => {
              body += chunk.toString().toUpperCase();
            });
          
            res.on("end", () => {
              expect(body).toMatch(/UNA FUNCIÓ DEBOUNCE ÉS UNA TÈCNICA PER CONTROLAR LA FREQÜÈNCIA/);
              expect(options.method).toEqual("POST")
              done();
            });
          
            } else {
              console.error("Send me a POST request")
            }
          })
    });
});

describe("Testing http-json-api-server", () => {
    test("Should work properly", done => {
        const server4 = http.createServer((req: any, res: any) => {
            const newUrl = new URL(req.url, "http://localhost:3004");
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
            res.end(result);
            
        }).listen(3004);

        http.get("http://localhost:3004/api/parsetime?iso=2013-08-10T12:10:15.474Z", (response: any) => {
          response.on("data", (data: any) => {
              let result = data.toString();

              expect(result).toContain("{\"hour\":14,\"minute\":10,\"second\":15}");
              done();
          })
        })

        setTimeout(() => {
            server4.close();
            server4.closeAllConnections();
        }, 3000);
    });
});

setTimeout(() => {
    server.close();
    server.closeAllConnections();
    server2.close();
    server2.closeAllConnections();
    server3.close();
    server3.closeAllConnections();
}, 3000); 

