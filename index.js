var http = require("http");

let server = http.createServer((req, res) => {
    console.dir(req, { depth: 0});
    res.end('Hello World');
})

server.listen(8081,() =>
    console.log('Server is running and listening to port 8081...'))
