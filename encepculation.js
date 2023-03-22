class Triger{
    #speed = 500;
    location = "sundarban";
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`I am ${this.name}. I am running on ${this.#speed} KM`)
    }
}

const royal = new Triger("Royal Bangole Triger");
royal.run();