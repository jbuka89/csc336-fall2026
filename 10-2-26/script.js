function getMessage(){
    return "Hello";
}

console.log(getMessage())

//let getExcited = (str) => {return str + "!!!"};
//  console.log(getExcited("Hello"));

let getExcited = str => str + "!!!";

//let getExcited = function(str) {
   // return str + "!!!";
//}
//console.log(geExcited("Hello"));


//2.5
//let getExcited = function(str) { return str + "!!!"};
//console.log(getExcited("Hello"));

let rootDiv = document.querySelector("body");
let button = document.createElement("button")
button.innerHTML = "click";
rootDiv.append(button);

//button.addEventListener("click", function() { console.log("CLICKED")})
button.addEventListener("click", e => {
    let rand = Math.floor(Math.random()*500000000);
    button.innerHTML = rand;
})



let numbers = [10, 4, 6, 7 ,3, -1];

numbers.sort((a,b) => a-b);

console.log(numbers)

let doubledNumbers = numbers.map(element => element * 2);
console.log(doubledNumbers);

for (let i = 0; i < numbers.length; i++){
    let number = numbers[i]
}

for (let number of numbers) {
    console.log(number);
}