const express = require("express");
const { get } = require("http");
const path = require("path");
const jsonPaises = require("./paises.json");
const app = express();
const PORT = 3456;

let listaPaises = jsonPaises.countries;

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, ()=>console.log(`Escuchando en ${PORT}`));

