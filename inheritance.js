class SmartDivice{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
    charging(){
        console.log("I am eating electrons ..... yammay")
    }
}

class Phone extends SmartDivice{
    constructor(name,price,camera){
        super(name,price);
        this.camera = camera;
    }
}

class Watch extends SmartDivice{
    constructor(name,price,distance){
        super(name,price);
        this.distance = distance;
    }
}

class Tablet extends SmartDivice{
    constructor(name,price,isWifi){
        super(name,price);
        this.isWifi = isWifi;
    }
}

const samsung = new Phone("Samsung A15",45000,"20 px");

