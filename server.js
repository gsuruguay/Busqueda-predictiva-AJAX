const express = require("express");
const path = require("path");
const jsonPaises = require("./paises.json");
const app = express();
const PORT = 3456;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/buscar", (req, res)=>{
    let resultados = jsonPaises.countries;

    if (req.query.pais) {
        resultados = resultados.filter(element=>{
            return element.name_es.toLowerCase().includes(req.query.pais.toLowerCase());
        })
    }
    res.json(resultados);
});

app.listen(PORT, ()=>console.log(`Escuchando en ${PORT}`));

