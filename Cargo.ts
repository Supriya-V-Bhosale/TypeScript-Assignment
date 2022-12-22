import { payLoad } from "./payLoad.js";

export class Cargo implements payLoad{
    massKg: number=0;
    material:String='';

    constructor(_massKg:number,_material:String){
        this.massKg=_massKg;
        this.material=_material;
    }


}