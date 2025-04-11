
//Mostrar los personajes sin filtrar
// Obtener todos los personajes llamando a la API
//Renderizarlos en nuesrto dom
//cuando cambian los filtros se tiene que hacer un neuvo llamado a la API
//Se debe renderizar neuvamente

const characterE1 = document.getElementById('characters');
const nameFilterE1 = document.getElementById('name-filters');
const statusFilterE1 = document.getElementById('status-filters');

//crear funcion que haga el lalamdo a la api

async function getCharacters (name,status){
    //para que pueda ser una funcion que pueda manejar promesas, hacer  fetch y retornar de forma
    //limpia, usamos ASYNC

    //definir endpoint
    let url = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive'

    const response = await fetch(url); // retorna una promesa
    const data = await response.json()// hace que la respuesta llegue formateada como un json

    console.log(data);
    return data.results;

}

getCharacters();