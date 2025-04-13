//Mostrar los personajes sin filtrar
// Obtener todos los personajes llamando a la API
//Renderizarlos en nuesrto dom
/* En JavaScript, renderizar en nuestro DOM se refiere al proceso de mostrar 
o actualizar elementos visuales en la página web (es decir, en el DOM, que 
es la representación en memoria de la estructura de la página).
*/
//cuando cambian los filtros se tiene que hacer un neuvo llamado a la API
//Se debe renderizar neuvamente

const characterE1 = document.getElementById('characters'); //el contenedor de los personajes
const nameFilterE1 = document.getElementById('name-filters'); //el input de nombre
const statusFilterE1 = document.getElementById('status-filters'); //el input de estado



//crear funcion que haga el llamado a la api
async function getCharacters(name, status) {
    //para que pueda ser una funcion que pueda manejar promesas, hacer  fetch y retornar de forma
    //limpia, usamos ASYNC

    // url de la api
    let url = 'https://rickandmortyapi.com/api/character/';


    if (name || status) {
        url += '?';
        if (name) {
            url += `name=${name}&`;
        }

        if (status) {
            url += `status=${status}`;
        }
    }

    const response = await fetch(url); // retorna una promesa
    const data = await response.json();// hace que la respuesta llegue formateada como un json

    return data.results;
}





async function displayCharacters(name, status) {

    //Obtener personajes filtrados
    const characters = await getCharacters(name, status);//Es la funcion que llama a la api

    characterE1.innerHTML = '';

    //renderizar los personajes
    for (let character of characters) {
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = ` 
        <img src="${character.image}" />
        <h2> ${character.name} </h2>
        <p> Status: ${character.status} </p>
        <p> Especie: ${character.species} </p>
        `;

        characterE1.appendChild(card);
    }
}


displayCharacters();

//Creamos evento, cada vez que hacemos clic en el bsucador
nameFilterE1.addEventListener('input', () => {
    displayCharacters(nameFilterE1.value, statusFilterE1.value);
});

//evento de change
statusFilterE1.addEventListener('change', () => {
    displayCharacters(nameFilterE1.value, statusFilterE1.value);
});
