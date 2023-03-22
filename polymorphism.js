class Circle{
    constructor(radious){
        this.radious = radious;
    }
    area(){
        return Math.PI * Math.pow(this.radious,2);
    }
}
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.height * this.width;
    }
}

class Triangle{
    constructor(base,height){
        this.base = base;
        this.height = height;
    }
    area(){
        return this.base*this.height /2
    }
}

const sheps = [new Circle(10),new Rectangle(20,5),new Triangle(20,20)];


for (let i = 0; i < sheps.length; i++) {
    const shep = sheps[i];
    console.log(shep.area());
}