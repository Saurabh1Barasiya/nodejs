const http = require("http");

// console.log(http);
const port = 8080;

const server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log("=============================");
    // console.log(res);
    
    res.end("hello world");

})

server.listen(port);


