const inputBuscar = document.getElementById("inputBuscar");
const titResultados = document.getElementById("titResultados");
const btnReset = document.getElementById("btnReset");
const containerResul = document.getElementById("containerResul");

//Evento predictivo del input de busqueda
inputBuscar.addEventListener("keyup", function(){
let busqueda = inputBuscar.value;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        let respuesta = JSON.parse(xhr.responseText);
        containerResul.innerHTML = "";
        titResultados.innerHTML = "";

        respuesta.forEach(element => {
            let res = element.name_es;
            let resStrong = res.slice(0,busqueda.length);
            let restoText = res.slice(busqueda.length);
            const newItem = document.createElement("li");
            const etiqB = document.createElement("strong");
            const cursiva = document.createElement("i")   ;         

            etiqB.textContent = resStrong;
            newItem.appendChild(etiqB);
            cursiva.textContent = restoText;
            newItem.appendChild(cursiva);
            newItem.classList.add("lista")
            containerResul.appendChild(newItem);

            //Evento sobre un item de la lista de resultados
            newItem.addEventListener("click", function(){
                inputBuscar.value = newItem.textContent;
                containerResul.innerHTML = "";
                titResultados.textContent = "";
                containerResul.innerHTML = `                
                <p><strong>Nombre en Inglés:</strong> ${element.name_en}</p>
                <p><strong>Nombre en Español:</strong> ${element.name_es}</p>
                <p><strong>Prefijo telefónico:</strong> ${element.dial_code}</p>
                `;
                
            })    
        });
        // ATitulo para mostrar la cantidad de coincidencias
        titResultados.textContent = `Hay ${respuesta.length} resultado${respuesta.length === 1 ? "" : "s"} para tu consulta`;        
    })    
    xhr.open("GET", "/buscar?pais=" + busqueda);
    xhr.send();
});

//Evento del boton reset para borrar todos los contenidos
btnReset.addEventListener("click", function(){
    containerResul.innerHTML = "";
    titResultados.textContent = "";
})
