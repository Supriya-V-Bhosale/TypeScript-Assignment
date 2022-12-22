import { rmdirSync } from "fs";

interface payLoad{
    massKg:number
}



class Astronaut implements payLoad{
    massKg: number=0;
    name:String='';

    constructor(_massKg:number,_name:String){
        this.massKg=_massKg;
        this.name=_name;
    }

}

class Cargo implements payLoad{
    massKg: number=0;
    material:String='';

    constructor(_massKg:number,_material:String){
        this.massKg=_massKg;
        this.material=_material;
    }


}



class Rocket{

    name:String='';
    totalCapacityKg:number=0;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];

    constructor(_name:String,_totalCapacityKg:number){
        this.name=_name;
        this.totalCapacityKg=_totalCapacityKg;
    }

    sumMass(items:payLoad[]):number{
        let sum:number=0;
        for(let i=0;i<items.length;i++){
            sum += items[i].massKg;
        }
        
        return sum;


    }

    currentMassKg():number{
       return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
        
    }

    canAdd(item:payLoad):boolean{
        if(this.currentMassKg()+item.massKg<=this.totalCapacityKg){
            return true;
        }
        else
        return false;

    }
    addCargo(cargo:Cargo):boolean{
        if(this.canAdd(cargo)){
            return true;
        }
        else
        return false;

    }


    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            return true;
        }
        else return false;
    }



    

}
let rocket=new Rocket("POLO",50);
let sumMass=rocket.sumMass([{massKg:10},{massKg:20}]);
let currentMass=rocket.currentMassKg();
let canAdd:boolean=rocket.canAdd({massKg:90});
let addcargo=rocket.addCargo({massKg:60,material:'still'});
let addastronaut=rocket.addAstronaut({massKg:100,name:"Polo"});
 
console.log(sumMass);
console.log(currentMass);
console.log(canAdd)
console.log(addcargo)

console.log(addastronaut)

