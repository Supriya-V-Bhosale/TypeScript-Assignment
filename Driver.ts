import { Main } from "./Main.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";

let rectangle =new Rectangle(4,3);
let square=new Square(5);

let main=new Main();

console.log(main.calculateArea(rectangle));
console.log(main.calculateArea(square));
