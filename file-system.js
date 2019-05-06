const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

writeFileAsync('./texto3.txt', 'hola mundo 4').then((res) => {
    console.log('archivo creado');
});

readFileAsync('./texto.txt').then(res => {
    console.log(res.toString());
}).catch(err => {
    console.log(err);
});

