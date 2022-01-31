var http = require("http");
var rest = require("rest");

let server = http.createServer((req, res) => {
    console.dir(req, { depth: 0});
    res.end('Hello World');
})

server.listen(8081,() =>
    console.log('Server is running and listening to port 8081...'))

fetchWebsite = () => rest('https://www.googlesdsdvsd.com');

fetchWebsite().then(response => {
    if (response.status.code === 200) {
        console.log(`Successfully reached ${response.url}`);
    }
},
error => {
    console.log('Request failed with error: ',error.error);
}
);

