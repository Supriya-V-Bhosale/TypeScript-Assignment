import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { payLoad } from "./payLoad.js";

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
let addcargo=rocket.addCargo({massKg:40,material:'still'});
let addastronaut=rocket.addAstronaut({massKg:100,name:"Polo"});
 
console.log("Total Mass: " + sumMass);
console.log("Current Mass: " + currentMass);
console.log("Can Add: " + canAdd)
console.log("Can Add Cargo: " + addcargo)

console.log("Can Add Astrount: " + addastronaut)

