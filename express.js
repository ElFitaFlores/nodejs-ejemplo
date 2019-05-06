const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo express</h1>');
});

server.listen(3000, () => {
    console.log('Listen 3000');
});