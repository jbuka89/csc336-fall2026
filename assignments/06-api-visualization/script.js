//Page elements
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const atb1 = document.getElementById('atb1');
const atb2 = document.getElementById('atb2');
const number = document.getElementById('myNumber');
const submit = document.getElementById('submitButton')
const output = document.getElementById('demo');

let pokemonNumber = 1;
const localStorageKey = "pokemon";
let savedPokemon = "";
let chart = null;

document.addEventListener('DOMContentLoaded', (event) =>{
    let localStorageData = localStorage.getItem(localStorageKey)

    if (localStorageData !== null) {
        pass
    }
})

submit.addEventListener('click', (event)=>{
  if(parseFloat(number.value) > 975){
    alert("Number must be less than 975")
    number.value = ""; 
    return
  }
  
  pokemonNumber = parseFloat(number.value);  
  number.value = ""; 
  loadPokemon(atb1.value, atb2.value)

})


//Call to pokemon api
async function getPokemon(id) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    allPromises.push(response)
    let json = await response.json();  
    return json;
}

//Create and populate allPokemon with first 50 Pokemon
hpAttack = []
allPromises = []
let xAxisSize = 0;
let yAxisSize = 0;

async function loadPokemon(xVal=0, yVal=1){
    loadCount = 0;
    hpAttack.length = 0;
    promises = []
    maxX = 0;
    maxY = 0;

    for(let x=pokemonNumber; x<=pokemonNumber+50; x++){
        console.log("loop")
        promises.push(getPokemon(x))
        
    }

    console.log(loadCount)
    //Ensures all data was fetched before trying to load into chart
    done = await Promise.all(promises)

    done.forEach(data => {
        console.log(data["stats"])
        eachX = data["stats"][xVal]["base_stat"]
        eachY = data["stats"][yVal]["base_stat"]
        if(eachX > maxX){
            maxX = eachX
        }
        if(eachY > maxY){
            maxY = eachY
        }

        hpAttack.push({
            x: eachX,
            y: eachY,
            name: data["name"]
        })        
    });

    console.log(hpAttack)
    //Round axes max to nearest 10
    config['options']['scales']['x']['max'] = Math.round(maxX*1.1 / 10) * 10
    config['options']['scales']['y']['max'] = Math.round(maxY*1.1 / 10) * 10
    output.innerHTML = `${pokemonNumber} - ${pokemonNumber+50} : ${hpAttack[0]["name"]} - ${hpAttack[49]["name"]}`;
    //Wait until data is created to render chart
    if(!chart){
        chart = new Chart(ctx1, config)
    } else{
        chart.update() 
    }

}

atb1.addEventListener('change', (event) =>{
    loadPokemon(atb1.value, atb2.value)
    console.log("Changed")
})

atb2.addEventListener('change', (event) =>{
    loadPokemon(atb1.value, atb2.value)
})

loadPokemon(atb1.value, atb2.value)

const data = {
  datasets: [{
    label: 'Scatter Chart of Base Attributes for 50 Pokemon',
    data: hpAttack,
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 100
      },

      y: {
        min: 0,
        max: 100
      }
    },
    //Edit the Chart JS built in tooltip plugin to display Pokemon name along with values
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context){
                    const rawData = context.raw;
                    const name = rawData.name;
                    const atk = context.parsed.y;
                    const hp = context.parsed.x


                    return `${name}: ${[hp, atk]}`; 
                }
            }
        }
    }
  }
};


//  new Chart(ctx2, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });