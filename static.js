// this is summary just compare static not new keyword using for access not undefiend if you using new keyword variable diclare you get this value if undefiend 


class Animal{
    static category = "Dog"
    location = "khagrachori";

    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }   
   static compare(animal1,animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is Faster`
        }
        return `${animal2.name} is Faster`
       
    }
}

const myRet = new Animal('Rat',12);
const myDog = new Animal('Dog',30);

console.log(Animal.compare(myRet,myDog));
