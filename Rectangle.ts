import { Shape } from "./shape.js";

export class Rectangle implements Shape{
    
    l:number;
    width:number;

 
    constructor(length:number,width:number){
        this.l=length;
        this.width=width;
    }

       area(): number {
        return this.l*this.width;
    }
    
 

}