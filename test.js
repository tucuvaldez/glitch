let express = require('express');
const PORT = process.env.PORT || 8080;
let app = express();




const HandleProducts = require('./handleProducts')


async function test() {
    let productos = new HandleProducts('productos.txt')


    let getData = await productos.getData();
    let getRandom = await productos.getRandom();
    console.log(getData);

    app.get('/productos', (req, res, next) => {
        res.send(`${JSON.stringify(getData)}`);
    })

    app.get('/productoRandom', (req, res, next) => {
        res.send(`${JSON.stringify(getRandom)}`);
    })

};



app.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}/productos`) });
test();
