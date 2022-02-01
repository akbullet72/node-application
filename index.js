var http = require("http");
var rest = require("rest");
var when = require("when");

let server = http.createServer((req, res) => {
    //console.dir(req, { depth: 0});
    res.end('Hello World');
})

server.listen(8081,() =>
    console.log('Server is running and listening to port 8081...'))

when.resolve('promise is resolved').then((result,error) => console.log(result));

fetchPromise = (num) => {
    return num/0;
}

when(fetchPromise(12)).then(result => console.log(result));


fetchWebsite = () => rest('https://www.google.com');

fetchWebsite().then(response => {
    if (response.status.code === 200) {
        console.log(`Successfully reached ${response.url}`);
        process.exit(0)
    }
},
error => {
    console.log('Request failed with error: ',error.error);
}
);


