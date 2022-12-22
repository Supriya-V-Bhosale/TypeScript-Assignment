import { Shape } from "./shape.js";

export class Square implements Shape{
    side:number;
    constructor(_side:number){
    this.side=_side;
    }
    area(): number {
        return this.side*this.side;
    }

}