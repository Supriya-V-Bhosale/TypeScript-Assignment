const num:number=9420011477;
const numArr:number[]=[];
const numstr=num.toString();
for (let index = 0; index < numstr.length; index++) {
    const element = numstr[index];
    numArr[index]=parseInt(element, 10)
    
}

console.log(...numArr);


