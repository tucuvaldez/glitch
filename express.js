let express = require('express');
const PORT = 3000;
const moment = require('moment')
let app = express();

let visitas = 0;

app.get('/', (req, res, next) => {
    res.send(`<h1 style="color:blue" >Bienvenidos</h1>`);
})

app.get('/visitas', (req, res, next) => {
    visitas++
    res.send(`Total visitas: ${visitas}`);
})

app.get('/fyh', (req, res, next) => {
    let hora = moment().format('YYYY-MM-DD HH:mm:ss')
    res.send(`${hora}`);
})

app.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}`) });