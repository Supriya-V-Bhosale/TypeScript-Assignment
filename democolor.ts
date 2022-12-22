//...
//declare function
let dispplayColors=function(msg:String,...colors:any){
    console.log(msg);
    console.log(...colors);
}

let message="list of colors";
dispplayColors(message,'red','black','white');
dispplayColors(message,'red');
