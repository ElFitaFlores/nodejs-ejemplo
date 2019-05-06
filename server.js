const http = require('http');
const colors = require('colors');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola mundo</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server up'.yellow);
});