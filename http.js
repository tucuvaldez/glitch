// const HTTP = require('http');
// let moment = require('moment');
// const PORT = 3000;
// const SERVER = HTTP.createServer((request, response) => {
//     let hora = moment().hour();
//     response.end(`Son las ${hora}`);
// });

// let connectedServer = SERVER.listen(PORT, () => {
//     console.log(`Server on http://localhost:${PORT}`);
// });

// connectedServer.on('error', err => console.log(err));

const HTTP = require('http');
let moment = require('moment');
const PORT = 3000;
const SERVER = HTTP.createServer((request, response) => {
    let hora = moment().add(12, 'h').hour();
    let mensaje = 'Buenas noches';
    if (hora >= 6 && hora <= 12) { mensaje = 'Buenos dias' }
    if (hora >= 13 && hora <= 19) { mensaje = 'Buenas tardes' }
    response.end(`${mensaje}`);
});

let connectedServer = SERVER.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});

connectedServer.on('error', err => console.log(err));