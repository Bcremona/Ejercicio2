const fs = require('fs')

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }
    
    async getById(getID) {
        
        try {
            const dataText = await fs.promises.readFile(this.fileName, 'utf8');
            const dataParsed = JSON.parse(dataText);
            dataParsed.forEach(element => {
                if(element.id == getID) {
                    return dataParsed[element.id];
                }
            });
            return dataParsed;
        } catch (error) {
            return null;
        }

    }
    
    async getAll() {
        try {
            const all = await fs.promises.readFile(this.fileName, 'utf8');
            //console.log(all);
            return all;
        } catch (err) {
            console.log('Error en la lectura!', err)
        }
    }

}

module.exports = { Contenedor };