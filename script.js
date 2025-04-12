
//Mostrar los personajes sin filtrar
// Obtener todos los personajes llamando a la API
//Renderizarlos en nuesrto dom
//cuando cambian los filtros se tiene que hacer un neuvo llamado a la API
//Se debe renderizar neuvamente

const characterE1 = document.getElementById('characters'); //el contenedor de los personajes
const nameFilterE1 = document.getElementById('name-filters'); //el input de nombre
const statusFilterE1 = document.getElementById('status-filters'); //el input de estado

//crear funcion que haga el lalamdo a la api

async function getCharacters(name, status) {
    //para que pueda ser una funcion que pueda manejar promesas, hacer  fetch y retornar de forma
    //limpia, usamos ASYNC

    // url de la api
    let url = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive'

    const response = await fetch(url); // retorna una promesa
    const data = await response.json()// hace que la respuesta llegue formateada como un json

    console.log(data);
    return data.results; //esto es lo que nos devuelve la api

}

getCharacters(); //llamamos a la funcion para que se ejecute al cargar la pagina