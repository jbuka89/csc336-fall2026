class MyArray {


    constructor(){
        this.array = []
    }

    push(val){
        this.array.push(val)
    }

    get(index){
        return this.array[index];
    }

    forEach(fn) {
        for (let i =0; i < this.array.length; i += 1){
            fn(this.array[i]);
        }
    }

    filter(functionToRunOnEachElementOfArray){
        let arrayOfElementsThatSatisfyGivenFunction = [];
        for (let element of this.array){
            if(functionToRunOnEachElementOfArray(element)) {
                arrayOfElementsThatSatisfyGivenFunction.push(element)
            }
        }
        return arrayOfElementsThatSatisfyGivenFunction;
    }

    map(fn){
        let map = []

        for (let element of this.array){
            map.push(fn(element))
        }

        return map    
    }
}



document.addEventListener("DOMContentLoaded", () => {

    let arr = new MyArray();
    
    arr.push(4);
    arr.push(-1);
    arr.push(9);
    arr.push(2);

    //let mapExample = arr.map( e => e * 2 );
    let mapExample = app.map( (e) => {
        let newValue = e*2
        return newValue
    })
    

    arr.forEach((current) => {
        console.log(current);
    })


    let greaterThanOneArray = arr.filter((currentElement) => {
        if (currentElement > 1) {
            return true;
        }
        return false;
    })

    let doubleValue = arr.map((currentElement) => {
        return currentElement * 2
    })

    let data = [
        {
            name: "MIke"
        },
        {
            name: "BUDdY"
        }
    ];

    let lowerCaseData = data.map((obj)=>{
        obj.name = obj.name.toLowerCase();
        return obj;
    })

})