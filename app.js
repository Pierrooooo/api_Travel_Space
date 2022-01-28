var body = document.querySelector('body')
var yourDes = document.querySelector('.your_destination')
var yourShip = document.querySelector('.your_starship')
var yourCoP = document.querySelector('.your_copilot')

function getPlanets(){
    body.innerHTML += `<section class="planets_div"></section>`
    let planetsDiv = document.querySelector('.planets_div')

    fetch('https://swapi.dev/api/planets')
    .then(response => response.json())
    .then(response => {
        
        
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
    body.innerHTML += `<section class="starships_div"></section>`
    let starShipsDiv = document.querySelector('.starships_div')

    fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(response => {

        response.results.forEach(ship => {
            starShipsDiv.innerHTML += `
            <div class="ship">
                <p>${ship.name}</p>
            </div>
            `
        })

        document.querySelectorAll('.ship').forEach(ship => {
            ship.addEventListener('click', ship => {
                getPeoples()
                getCharacters()
            })
        })
    })
}

function getPeoples(){
    body.innerHTML += `<section class="peoples_div"></section>`
    let peoplesDiv = document.querySelector('.peoples_div')

    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => {

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
    body.innerHTML += `<section class="characters_div"></section>`
    let charactersDiv = document.querySelector('.characters_div')

    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(response => {

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people">
                <img src="${characters.imageUrl}"></img>
                <p>${characters.fullName}, ${characters.familly}</p>
            </div>
            `
        })
        
    })
}

