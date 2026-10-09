function sayHello() {
    console.log("Hello");
}

let renamedSayHello = sayHello;
renamedSayHello();

function calledRepeatTooManyTimes(howManyTimes) {
    console.log("Called repeat too many times:" + howManyTimes)
}


let repeatedCount = 0;
function repeat(fn, count){
    for (let i=0; i < count; i++){
        if (repeatedCount >= 8) {
            error_fn(count)
            return;
        }
        fn();
        repeatedCount++;
    }
}


let rootDiv = document.querySelector("#root");

let btnEl = document.createElement("button");
btnEl.innerHTML - "CLICK"

rootDiv.append(btnEl);

btnEl.addEventListener("click", )