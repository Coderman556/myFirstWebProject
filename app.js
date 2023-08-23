const http = require('http');
const fs = require('fs');
const port = 3690;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error,data) => {
        if (error) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.writeHead(200);
            res.write(data);
        }
    })
    res.write('Hello Node');
    res.end();
})

server.listen(port, (error) => {
    error ? console.log('Error occurred', error) : console.log('all good @', port);
})