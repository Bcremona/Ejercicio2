const { application } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const contenedor = require('./contenedor.js');

const container = new contenedor.Contenedor('./productos.txt');

async function getAllElements() {
    const allElements = await container.getAll();
    return JSON.parse(allElements);
}



app.get("/productos", (req, res) => {
    getAllElements()
    .then(data => {
        console.log(data)
        res.send(data);
    });
})

app.get('/productoRandom', (req, res) => {
    
    const random = Math.floor(Math.random() * (2 - 0)) + 0;
    container.getById(random)
    .then(data => {
        console.log(data)
        res.send(data);
    });
    
    
})

const PORT = process.env.PORT || 8080 ;

const server = app.listen(PORT, () => {
    console.log(`Server started: Escuchando en puerto ${PORT}`);
})

server.on('error', (err) => {
    console.log(`Error: ${err}`)
})
