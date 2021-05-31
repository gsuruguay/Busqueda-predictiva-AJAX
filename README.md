# Consulta predictiva de paises

## Objetivo

**Desarrollar una app que contiene una página con un input, que ante cada evento keyup haga un request GET a un endpoint en nuestro servidor, pasando el texto ingresado como parámetro por query string. Recibe como respuesta (en formato JSON) la lista de países que contienen ese texto y los muestra uno abajo del otro en una lista.**

### index.html

* Muestra 1 input dentro de un nav. Tiene un botón "reset" para borrar todo el contenido.
* Cuando se obtiene la respuesta, se muestra los resultados como una "lista", con los nombres de los paises que coinciden con el texto ingresado.
* El texto puesto en el input se mostrarán en negrita la parte que coincide. El resto del texto se verá en cursiva.
* Los resultados obtenidos son clickeables, mostrando mas datos del país seleccionado, como su nombre en inglés y el prefijo internacional. 
* El nombre del país seleccionado se pondrá en el contenido del input de búsqueda.

### Server

Contiene solo 2 endpoints

* GET "/": entrega la página inicial index.html
* GET "/buscar": Búsqueda de paises, recibe por query string cada letra introducida en el input de búsqueda. Busca en los datos que estén en el archivo paises.json y renderiza los resultados de los paises coincidentes. Hace que la búsqueda no sea case sensitive (o sea, que coincida más allá de mayúsculas y minúsculas)

## Instalación
* Clonar el proyecto con **git clone https://github.com/gsuruguay/Busqueda-predictiva-AJAX.git**
* Ejecutar por consola desde la carpeta raiz del proyecto **npm install** para instalar las dependencias usadas (express).
* Se accede por **http://localhost:3456/**
