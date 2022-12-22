//

const array:number[]=[10,34,23,4,2,2,1,3,4,5,33,2];

let min=function findMin(arr:number[]){
    let min=array[0];
    for (let index = 0; index < array.length; index++) {
        if(min>array[index]){
            min=array[index];
        }
        
    }
    

}
let max=function findMax(array:number[]){
    let max=array[0];
    for (let index = 0; index < array.length; index++) {
        if(max<array[index]){
            max=array[index];
        }
        
    }
    


}

// console.log(min);
// console.log(max);

