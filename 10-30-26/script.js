let creatures = [];
let numCreatures = 1000;

let creature = {
    x:100,
    y:100,
    radius:25
}

class Creature{
    constructor(x, y, r, h, id){
        this.x = x;
        this.y = y;
        this.radius = r;
        this.hue = h;
        this.id = id;
    }

    update() {
        // this.x += 1

        fill(this.hue, 50, 100)
        stroke(255,255,255)
        // strokeWeight(5)

        ellipse(this.x,this.y,this.radius)
    }
}

async function getPokemon(id){
    let response = await fetch("htttps://pokeapi.co/api/v2/pokemon" + id);
    let json = await response.json();
    return json
}

async function setup(){
    console.log("p5 called this function.");
    createCanvas(600,500)
    colorMode(HSB);

    for (let i = 0; i < numCreatures; i++) {
        let x = width / numCreatures * i;
        let hue = 360 / numCreatures * i;
        let creature = new Creature(x,50,60, hue, i);
        creatures.push(creature)

        creature.data = await getPokemon(i);

    }

    creature = new Creature(100, 50, 60);

}

function draw(){
    background(0,0,0)
    for (let creature of creatures) {
        creature.update();
    }
}