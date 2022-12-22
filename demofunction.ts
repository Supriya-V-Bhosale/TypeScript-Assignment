//function overloading
function add(strOne:String,strTwo:String):String;
function add(numOne:number,numTwo:number):number;
function add(numOne:number,numTwo:number,strOne:String):number; //(?-nullable)
//implementation
function add(paramOne:any,paramTwo:any){
    return paramOne+paramTwo;
}

console.log(add(5,6));