# Hi, this is a class projet in witch I have to use at minimu 2 API.
 I decided to use multiple API wich are : StarWars, Game Of Thrones, Rick & Morty and Harry Potter
 
 It's uploaded at https://space.travel.8pier.re/

## How it works : 

 - The first function Restart() is used when you click on the button on your history travel selector tab
  It reset all the html content of the container section and the your_section div.
  It add/remove a class to the element where are all your history, it close it on the right of the screen.
  It make some tricks to make the arrow working.
  It calls the function GetPlanets().
  
  
  Out of this function I add an click event on the arrow which make works the history tab
  
 - The second function getPlanets() is used to fetch the planets from the StarWars API 
  Before the fetch it implement all the necessary elements.
  It fetch the StarWars API to get the planets then for each element of the array it returns I inject in HTML the right infos I want.
  It inject in The history tab all the div that we will be using after
  It inject in the history tab the restart button we saw earlier and the destination you cliked on
  It make disappear the planets choise to let continue the travel selector
  
 - The third function() getStarships work basically as the previous one at some exeptions
  Instedd of the Restart button it add the buttons to choose the universe of your co-pilot/passengers
  
 - The Fourth function() getStarWarsCharacters() is used to get the characters from the StarWars API
  It reset the div where the characters appears (in case that you try to choose muliple universe as passengers)
  It get the maxpassengers data from the ship 
  It fetch the StarWars API to get the characters and make all being an HTML element (like for others fetchs)
  It verify if u already a StarWars characters in the past to make shure you don*t duplicate the "Co-Pilot/Passengers from StarWars: " on the history tab
  It add on the history tab the character you choosed if you haven't already passed the max passengers data of the ship
  
 - The others functions to get characters work the same(i'll probably factorize it as one function later to make it easier to read and shorter code :) )
 
 - The function disappear() just add some class which have an animation
 
Hope you enjoy my project and don't hesitate to send me some upgrade I should do ;)

![ Alt text](https://tenor.com/view/cya-fam-cyaa-fam-bai-buddy-bai-bud-bai-gif-22261115.gif)
