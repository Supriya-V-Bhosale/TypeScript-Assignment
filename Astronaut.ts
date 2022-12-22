import { payLoad } from "./payLoad.js";

export class Astronaut implements payLoad{
    massKg: number=0;
    name:String='';

    constructor(_massKg:number,_name:String){
        this.massKg=_massKg;
        this.name=_name;
    }

}