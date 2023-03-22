class Hero {
    constructor(name,power){
        this.name = name;
        this.power = power;
    }
    getPower(){
      if(this.power){
        return this.power
      }
      return "I have no power"  
    }
}

const batman = new Hero("Batman","ural deoya");

console.log(batman.getPower());
