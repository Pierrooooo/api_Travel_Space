var yourDes = document.querySelector('.your_destination')
var yourShip = document.querySelector('.your_starship')
var yourCoP = document.querySelector('.your_copilot')

function getPlanets(){
    
    fetch('https://swapi.dev/api/planets')
    .then(response => response.json())
    .then(response => {

        document.querySelector('body').innerHTML += `<section id="planets_div" class="planets_div"></section>`
        let planetsDiv = document.querySelector('.planets_div')
        
        response.results.forEach(planet => {
            planetsDiv.innerHTML += `
            <div class="planet" data-name="${planet.name}">
                <p>${planet.name}</p>
                <p>${planet.climate} - ${planet.terrain}</p>
                <p>Gravity Index : ${planet.surface_water}</p>
            </div>
            `
        })

        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('click', event => {
                yourDes.innerHTML += `
                <p>${planet.name}</p>
                `
                getStarShips()
            })
        })
        
    })
    
}

function getStarShips(){

    fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(response => {

        document.querySelector('body').innerHTML += `<section class="starships_div"></section>`
        let starShipsDiv = document.querySelector('.starships_div')

        response.results.forEach(ship => {
            starShipsDiv.innerHTML += `
            <div class="ship">
                <p>${ship.name}</p>
            </div>
            `
        })

        document.querySelectorAll('.ship').forEach(ship => {
            ship.addEventListener('click', el => {  
                getPeoples()
                getCharacters()
            
            })
        })
    })
}

function getPeoples(){

    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => {
        document.querySelector('body').innerHTML += `<section class="peoples_div"></section>`
        let peoplesDiv = document.querySelector('.peoples_div')
        console.log(peoplesDiv)

        response.results.forEach(people => {
            peoplesDiv.innerHTML += `
            <div class="people">
                <p>${people.name}</p>
            </div>
            `
        })
        
    })
}
function getCharacters(){
    

    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(response => {
        document.querySelector('body').innerHTML += `<section class="characters_div"></section>`
        let charactersDiv = document.querySelector('.characters_div')
        console.log(charactersDiv)

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people">
                <img src="${characters.imageUrl}"></img>
                <p>${characters.fullName}, ${characters.family}</p>
            </div>
            `
        })
        
    })
}

// the witcher Sims films disney 
//https://rickandmortyapi.com/api/character
//https://hp-api.herokuapp.com/api/characters
// https://api.disneyapi.dev/characters