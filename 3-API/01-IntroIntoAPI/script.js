const baseURL = 'https://api.spacexdata.com/v2/rockets'; 

const searchForm = document.querySelector('form'); 
const spaceShips = document.querySelector('ul'); 

searchForm.addEventListener('submit', fetchSpace); 

function fetchSpace(event) {

event.preventDefault() 


    fetch(baseURL) 
        .then(data => {
            return data.json()  
        })
        .then(json => {
        

        displayRockets(json);
        })
}

function displayRockets(json) { 
    console.log('display results:', json)

let rockets = json.forEach(rocket => { 
    let r = document.createElement('li'); 
    let d = document.createElement('li');
    r.innerText = rocket.name; 
    d.innerText = rocket.description;
    spaceShips.appendChild(r); 
    spaceShips.appendChild(d);
})
}


