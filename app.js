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
                console.log(planet)
                document.querySelector('.your_destination').innerHTML += `
                <p>${planet.dataset.name}</p>
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
            <div class="ship" data-name="${ship.name}">
                <p>${ship.name}</p>
            </div>
            `
        })

        document.querySelectorAll('.ship').forEach(ship => {
            ship.addEventListener('click', el => {  

                document.querySelector('.your_starship').innerHTML += `
                <p>${ship.dataset.name}</p>
                `

                document.querySelector('body').innerHTML +=`
                <section class="choose_universe">
                    <h2>Choose an Universe</2>
                    <button onclick="getStarWarsCharacters()">Star Wars</button>
                    <button onclick="getGOTCharacters()">Game Of Thrones</button>
                    <button onclick="getRMCharacters()">Rick & Morty</button>
                    <button onclick="getHPCharacters()">Harry Potter</button>
                </section>
                <div class="all_char"></div>
                `
            
            })
        })
    })
}

function getStarWarsCharacters(){
    document.querySelector('.all_char').innerHTML=``

    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => {
        document.querySelector('.all_char').innerHTML += `<section class="characters_starwars_div"></section>`
        let peoplesDiv = document.querySelector('.characters_starwars_div')
        console.log(peoplesDiv)

        response.results.forEach(people => {
            peoplesDiv.innerHTML += `
            <div class="people" data-name="${people.name}">
                <p>${people.name}</p>
            </div>
            `
        })
        
    })
}
function getGOTCharacters(){
    document.querySelector('.all_char').innerHTML=``
    
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(response => {
        document.querySelector('.all_char').innerHTML += `<section class="characters_got_div"></section>`
        let charactersDiv = document.querySelector('.characters_got_div')
        console.log(charactersDiv)

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.fullName}" data-image="${characters.imageUrl}">
                <img src="${characters.imageUrl}"></img>
                <p>${characters.fullName}, ${characters.family}</p>
            </div>
            `
        })
        
    })
}
function getRMCharacters(){
    document.querySelector('.all_char').innerHTML=``
    
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => {
        document.querySelector('.all_char').innerHTML += `<section class="characters_rm_div"></section>`
        let charactersDiv = document.querySelector('.characters_rm_div')
        console.log(charactersDiv)

        response.results.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.name}" data-image="${characters.image}">
                <img src="${characters.image}"></img>
                <p>${characters.name}, ${characters.species}</p>
            </div>
            `
        })
        
    })
}

function getHPCharacters(){
    document.querySelector('.all_char').innerHTML=``
    
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(response => {
        document.querySelector('.all_char').innerHTML += `<section class="characters_hp_div"></section>`
        let charactersDiv = document.querySelector('.characters_hp_div')
        console.log(charactersDiv)

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.name}" data-image="${characters.image}">
                <img src="${characters.image}"></img>
                <p>${characters.name}, ${characters.species}</p>
            </div>
            `
        })
        
    })
}

// the witcher films disney 
//https://hp-api.herokuapp.com/api/characters
// https://api.disneyapi.dev/characters
//https://rickandmortyapi.com/api/location