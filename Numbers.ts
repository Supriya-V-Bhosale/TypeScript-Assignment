import { IFirst } from "./IFirst.js";
import { ISecond } from "./ISecond.js";

class Numbers implements IFirst,ISecond{
    
    Display() {
        throw new Error("Method not implemented.");
    }
    Demo() {
        throw new Error("Method not implemented.");
    }
    Display() { 
        throw new Error("Method not implemented.");
    }
    GetValue() {
        throw new Error("Method not implemented.");
    }

}