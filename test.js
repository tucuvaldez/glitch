let express = require('express');
const PORT = process.env.PORT || 8080;
let app = express();

const HandleProducts = require('./handleProducts')


let productos = new HandleProducts('productos.txt')
// let getData = await productos.getData();
// let getRandom = await productos.getRandom();
// console.log(getData);

app.get('/productos', async (req, res, next) => {
    res.send(await productos.getData());
})

app.get('/productoRandom', async (req, res, next) => {
    res.send(await productos.getRandom());
})



app.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}/productos`) });

