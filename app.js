const countPass = 0

var yourDes = document.querySelector('.your_destination')
var yourShip = document.querySelector('.your_starship')
var yourCoP = document.querySelector('.your_copilot')

function restart(){
    document.querySelector('.container').innerHTML=``
    document.querySelector('.your_section').innerHTML=``
    document.querySelector('.your_section').innerHTML=`
    <div class="your_relative"></div>`

    document.querySelector('.your_section').classList.toggle('your_section2')
    document.querySelector('.arrow').remove()
    document.querySelector('.your_section').parentElement.innerHTML+=`
    <img class="arrow" src="imgs/arrow.png" alt="arrow's icon">
    `
    document.querySelector('.arrow').addEventListener('click',  event =>{
        document.querySelector('.arrow').classList.toggle('arrow2')
        document.querySelector('.your_section').classList.toggle('your_section2')
    })
    getPlanets()

}

function disappear(){
    document.querySelector('.click').classList.add('anim_disappear')
    document.querySelector('.scroll').classList.add('anim_disappear')
    document.querySelector('.try_it_button').classList.add('anim_disappear')
}

function validate() {
    let planet = document.querySelector('.your_destination p')
    let starShip = document.querySelector('.your_starship p')
    let copilots = document.querySelectorAll('.your_copilot p')
    console.log(copilots)
    copilotsArray = Array.prototype.slice.call(copilots, 0)
    console.log(copilotsArray)

    document.querySelector('.hi_welcome').classList.add('anim_disappear')

    document.querySelector('.container').innerHTML=``
    document.querySelector('.your_section').innerHTML=``
    document.querySelector('.your_section').innerHTML =`
    <div class="your_relative">    
    <div class="your_destination">
            <div class="buttons">
                <button onclick="restart()" class="restart_button">RESTART</button>
            </div>
        </div>
    </div>`


    document.querySelector('.your_section').classList.toggle('your_section2')
    document.querySelector('.arrow').remove()
    document.querySelector('.your_section').parentElement.innerHTML+=`
    <img class="arrow" src="imgs/arrow.png" alt="arrow's icon">
    `
    document.querySelector('.arrow').addEventListener('click',  event =>{
        document.querySelector('.arrow').classList.toggle('arrow2')
        document.querySelector('.your_section').classList.toggle('your_section2')
    })

    document.querySelector('nav').style.position = 'fixed'

    document.querySelector('.container').innerHTML = `
    <section class="end_section">
        <p class="thx_lot">Thanks a lot for using my Space Travel Selector ;)</p>
        <div class="titles">
            <div class="titlecontent">
                <p class="center">Space Travel<br />
                Selector</p>

                <p>I wish you will have a wonderfull travel to ${planet.dataset.planetname}, it's a pretty long trip but you will be in ${starShip.dataset.shipname}. I hope you wont feel bored during the travel because <span class="copilots_span"></span> will share this travel with you.</p>
                <p>If you enjoyed my project and you wanna support me, feel free to give me some feed backs </p>
                
            </div>
        </div>
        
    </section>
    `
        copilotsArray.forEach(copilot => {
            console.log(copilot.dataset.personame)
            document.querySelector('.copilots_span ').innerText += `${copilot.dataset.personame}, `
        })

}

document.querySelector('.arrow').addEventListener('click',  event =>{
    document.querySelector('.arrow').classList.toggle('arrow2')
    document.querySelector('.your_section').classList.toggle('your_section2')
})


function getPlanets(){
    document.querySelector('.go').style.display = 'none'


    document.querySelector('.container').innerHTML += `<h2 class="h2_choose choose_destination">Choose Your Destination</h2>`
    document.querySelector('.container').innerHTML += `<section id="planets_div" class="planets_div"></section>`
    let planetsDiv = document.querySelector('.planets_div')
    planetsDiv.innerHTML += ``

    fetch('https://swapi.dev/api/planets')
    .then(response => response.json())
    .then(response => {

        response.results.forEach(planet => {
            planetsDiv.innerHTML += `
            <div class="planet" data-name="${planet.name}">
                <p>Name : ${planet.name}</p>
                <p>Climate : ${planet.climate} - ${planet.terrain}</p>
                <p>Water (in %) : ${planet.surface_water}</p>
                <p>Gravity Index : ${planet.gravity}</p>
            </div>
            `
        })

        document.querySelector('.your_relative').innerHTML+=`
        <div class="your_destination"></div>
        <div class="your_starship"></div>
        <div class="your_copilot"></div>
        `

        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('click', event => {
                document.querySelector('.your_destination').innerHTML += `
                <div class="buttons">
                    <button onclick="restart()" class="restart_button">RESTART</button>
                    <button onclick="validate()" class="validate_button">Validate</button>
                </div>
                <h2 class="h2_your">Destination :</h2>
                <p data-planetname=${planet.dataset.name}>${planet.dataset.name}</p>
                `
                
                document.querySelector('.planets_div').classList.add('anim_disappear')
                document.querySelector('.choose_destination').classList.add('anim_disappear')

                getStarShips()
            })
        })
    })
}


function getStarShips(){

    document.querySelector('.planets_div').style.display = 'none'


    document.querySelector('.container').innerHTML += `<h2 class="h2_choose choose_starships">Choose Your Starship</h2>`
    document.querySelector('.container').innerHTML += `<section id="starships_div" class="starships_div"></section>`
    let starShipsDiv = document.querySelector('.starships_div')
    


    fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(response => {

        response.results.forEach(ship => {
            starShipsDiv.innerHTML += `
            <div class="ship" data-name="${ship.name}" data-pas="${ship.passengers}">
                <p>${ship.name} <br>Passengers max : ${ship.passengers}</p>
            </div>
            `
        })
        

        document.querySelectorAll('.ship').forEach(ship => {
            ship.addEventListener('click', el => {  

                document.querySelector('.your_starship').innerHTML += `
                <h2 class="h2_your">Starship :</h2>
                <p data-shipname="${ship.dataset.name}">${ship.dataset.name}</p>
                <p>Passengers max : ${ship.dataset.pas}</p>
                `
                const passMax = ship.dataset.pas

                document.querySelector('.container').innerHTML += `<h2 class="h2_choose choose_characters">Choose The Universe of your Co-Pilot/Passengers</h2>`
                document.querySelector('.container').innerHTML +=`
                <section class="choose_universe" data-passmax="${passMax}">
                    <button onclick="getStarWarsCharacters(countPass)">Star Wars</button>
                    <button onclick="getGOTCharacters(countPass)">Game Of Thrones</button>
                    <button onclick="getRMCharacters(countPass)">Rick & Morty</button>
                    <button onclick="getHPCharacters(countPass)">Harry Potter</button>
                </section>
                <div class="all_char"></div>
                `
                
                document.querySelector('.starships_div').classList.add('anim_disappear')
                document.querySelector('.choose_starships').classList.add('anim_disappear')
            })
        })
    })
}


function getStarWarsCharacters(countPass) {

    document.querySelector('.starships_div').style.display = 'none'

    document.querySelector('.all_char').innerHTML=``
    passMax = document.querySelector('.choose_universe').dataset.passmax
    document.querySelector('.all_char').innerHTML += `<section id="characters_div" class="characters_div"></section>`
    let peoplesDiv = document.querySelector('.characters_div')

    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => {

        response.results.forEach(people => {
            peoplesDiv.innerHTML += `
            <div class="people" data-name="${people.name}" data-image="Sorry but the API I used for StarWars stuffs do not have images ;(">
                <p>${people.name}</p>
            </div>
            `
        })
        if((typeof document.querySelector('.h2_your_co'))!= 'undefined'){
            document.querySelector('.your_copilot').innerHTML += `
                <h2 class="h2_your_co">Co-Pilot/Passengers from StarWars: </h2>
                `
        }
        else{
            document.querySelector('.your_copilot').innerHTML += ``
        }
        document.querySelectorAll('.people').forEach(people => {
            people.addEventListener('click', event => {
                countPass += 1
                if(countPass<=passMax){
                    document.querySelector('.your_copilot').innerHTML += `
                    <p data-personame="${people.dataset.name}">${people.dataset.name}</p> 
                    <p>${people.dataset.image}</p>
                    `
                }
                else{
                    document.querySelector('.your_copilot').innerHTML += `
                    <p>You can't add more passengers because of your starship capacity</p>
                    `
                }
            })
        })
    })
}
function getGOTCharacters(countPass) {
    
    document.querySelector('.starships_div').style.display = 'none'

    document.querySelector('.all_char').innerHTML=``
    passMax = document.querySelector('.choose_universe').dataset.passmax

    document.querySelector('.all_char').innerHTML=``
    document.querySelector('.all_char').innerHTML += `<section class="characters_div"></section>`
    let charactersDiv = document.querySelector('.characters_div')
    
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(response => {

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.fullName}" data-family="${characters.family}" data-image="${characters.imageUrl}">
                <img src="${characters.imageUrl}"></img>
                <p>${characters.fullName}</p>
                <span>${characters.family}</span>
            </div>
            `
        })
        if((typeof document.querySelector('.h2_your_co'))!= 'undefined'){
            document.querySelector('.your_copilot').innerHTML += `
                <h2 class="h2_your_co">Co-Pilot/Passengers from Game Of Thrones: </h2>
                `
        }
        else{
            document.querySelector('.your_copilot').innerHTML += ``
        }
        document.querySelectorAll('.people').forEach(characters => {
            characters.addEventListener('click', event => {
                countPass += 1
                if(countPass<=passMax){
                    document.querySelector('.your_copilot').innerHTML += `
                <img src="${characters.dataset.image}"></img>
                <p data-personame="${characters.dataset.name}">${characters.dataset.name}</p>
                <span>${characters.dataset.family}</span>
                `
                }
                else{
                    document.querySelector('.your_copilot').innerHTML += `
                    <p>You can't add more passengers because of your starship capacity</p>
                    `
                }
            })
        })
    })

}
function getRMCharacters(countPass){

    document.querySelector('.starships_div').style.display = 'none'

    document.querySelector('.all_char').innerHTML=``
    passMax = document.querySelector('.choose_universe').dataset.passmax
    
    document.querySelector('.all_char').innerHTML=``
    document.querySelector('.all_char').innerHTML += `<section class="characters_div"></section>`
    let charactersDiv = document.querySelector('.characters_div')
    
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response => {

        response.results.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.name}" data-species="${characters.species}" data-image="${characters.image}">
                <img src="${characters.image}"></img>
                <p">${characters.name}</p>
                <span>${characters.species}</span>
            </div>
            `
        })
        if((typeof document.querySelector('.h2_your_co'))!= 'undefined'){
            document.querySelector('.your_copilot').innerHTML += `
                <h2 class="h2_your_co">Co-Pilot/Passengers from Rick & Morty: </h2>
                `
        }
        else{
            document.querySelector('.your_copilot').innerHTML += ``
        }
        document.querySelectorAll('.people').forEach(characters => {
            characters.addEventListener('click', event => {
                countPass += 1
                if(countPass<=passMax){
                    document.querySelector('.your_copilot').innerHTML += `
                <img src="${characters.dataset.image}"></img>
                <p data-personame="${characters.dataset.name}">${characters.dataset.name}</p>
                <span>${characters.dataset.species}</span>
                `
                }
                else{
                    document.querySelector('.your_copilot').innerHTML += `
                    <p>You can't add more passengers because of your starship capacity</p>
                    `
                }
            })
        })
        
    })

}

function getHPCharacters(countPass){

    document.querySelector('.starships_div').style.display = 'none'

    document.querySelector('.all_char').innerHTML=``
    passMax = document.querySelector('.choose_universe').dataset.passmax

    document.querySelector('.all_char').innerHTML=``
    document.querySelector('.all_char').innerHTML += `<section class="characters_div"></section>`
    let charactersDiv = document.querySelector('.characters_div')
    
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(response => {

        response.forEach(characters => {
            charactersDiv.innerHTML += `
            <div class="people" data-name="${characters.name}" data-house="${characters.house}" data-image="${characters.image}">
                <img src="${characters.image}"></img>
                <p>${characters.name}</p>
                <span>${characters.house}</span>
            </div>
            `
        })
        if((typeof document.querySelector('.h2_your_co'))!= 'undefined'){
            document.querySelector('.your_copilot').innerHTML += `
                <h2 class="h2_your_co">Co-Pilot/Passengers from Harry Potter : </h2>
                `
        }
        else{
            document.querySelector('.your_copilot').innerHTML += ``
        }
        document.querySelectorAll('.people').forEach(characters => {
            characters.addEventListener('click', event => {
                countPass += 1
                if(countPass<=passMax){
                    document.querySelector('.your_copilot').innerHTML += `
                <img src="${characters.dataset.image}"></img>
                <p data-personame="${characters.dataset.name}">${characters.dataset.name}</p>
                <span>${characters.dataset.house}</span>
                `
                }
                else{
                    document.querySelector('.your_copilot').innerHTML += `
                    <p>You can't add more passengers because of your starship capacity</p>
                    `
                }
            })
        })
    })
}

