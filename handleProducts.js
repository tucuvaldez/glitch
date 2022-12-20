let fs = require('fs');

class HandleProducts {
    constructor(file) {
        this.file = file;
    }

    async getData() {
        try {
            let productos = await fs.promises.readFile(this.file, 'utf8');
            return JSON.parse(productos)
        } catch (error) {
            console.log(`error: ${error}`)
            return []
        }
    }

    async getRandom() {
        let productos = await this.getData();
        let randomId = Math.floor(Math.random() * 3) + 1
        try {
            const obj = productos.find(prod => prod.id === randomId)
            console.log(obj);
            return obj
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }
}

module.exports = HandleProducts;