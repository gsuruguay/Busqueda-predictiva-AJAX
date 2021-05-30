const inputBuscar = document.getElementById("inputBuscar");
const titResultados = document.getElementById("titResultados");
const btnBuscar = document.getElementById("btnBuscar");
const divResultados = document.getElementById("divResultados");

inputBuscar.addEventListener("keyup", function(){
let busqueda = inputBuscar.value;
    const xhr = new XMLHttpRequest();

    console.log("este es xhr"+xhr);

    xhr.addEventListener("load", function(){
        let respuesta = JSON.parse(xhr.responseText);
        console.log("Esta respuesta llega"+respuesta);
        divResultados.innerHTML = "";

        respuesta.forEach(element => {
            divResultados.innerHTML +=`
            <a href="#" class="list-group-item list-group-item-action">
            ${element.name_es}
          </a>
            `
        });
    })
    
    xhr.open("GET", "/buscar?pais=" + busqueda);
    xhr.send();
});
