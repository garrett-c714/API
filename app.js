const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//Remember to check and save the email links. Look into how that 
//switch statement stuff could potentially work out.
//Checking to see if laptop works.