import data from './data.json' assert {type: 'json'};

console.log(data);

let bgColour = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
]
//los colores estan en el orden de las tarjetas



//el map genera un nuevo arreglo a partir de otro (en este caso data)
let dailyArray = data.map(item => item.timeframes.daily)
let weeklyArray = data.map(item => item.timeframes.weekly)
let monthlyArray = data.map(item => item.timeframes.monthly)

console.log(dailyArray)
console.log(weeklyArray )
console.log(monthlyArray)
//aca con esto de arriba tengo toda la info dentro de los arreglos

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

drawElements(dailyArray)
//for each significa por cada. por cada elemento que contiene este arreglo vamos a hacer algo 
dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray)
});

weeklyBtn.addEventListener('click', () => {
    drawElements(weeklyArray)
});

monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray)
});

//hay q diferenciar tmb en q lugar hago click o daily o weeckly o monthly para q me aparezca la info correspondiente
function drawElements(array){
    secondSection.innerHTML = '';
    array.forEach( (element, index) => {
        //console.log(element) //el += es para q arme las 6 tarjetas si pongo = solo arma solo una. y data tiene 6 elementos por eso se forman las 6 tarjetas tmb
        
        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();
        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }
        
        secondSection.innerHTML += ` 
        <div class="card">
        <div class="card__background" style="background-color: ${bgColour[index]}">
          <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${data[index].title}</p>
            <img class="card__dots" src="./images/icon-ellipsis.svg" alt="puntos suspensivos">
          </div>
          <div class="card__time">
            <p class="card__hour">${element.current}hrs</p>  
            <p class="card__previous">Previous - ${element.previous}</p>   
          </div>
        </div>
      </div>` //con el ${data[index].title} me pone el titulo de c/tarjeta
    })
}