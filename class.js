// ES6 defiend class way
class PanDrive{
    constructor(capacity,color,price){
        this.capacity = capacity ;
        this.color = color ;
        this.price = price;
    }
}

const twinmoss = new PanDrive('32GB','Black',500);

const sundisk = new PanDrive("64GB","White");

console.log(twinmoss);
console.log(sundisk);


// before of es6 object create method

function StickyNote(color,price){
    this.color = color;
    this.price = price;
}

const yellow = new StickyNote("Gray",400);

console.log(yellow);