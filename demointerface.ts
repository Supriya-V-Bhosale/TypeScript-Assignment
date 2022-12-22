
interface IEmployee{
    empCode:number;
    empName:String;
    gatSalary:(empCode:number)=>number;
}

//enum
enum Role{Admin=1,Manager=2,Coordinator=3}

//class
class PermanentEmployee implements IEmployee{
    // instance varibles
    empCode: number=0;
    empName: String='';
    //additional Fields
    role:any='';
    isContract:boolean=false;

    //constructor
    constructor(_code:number,_name:String){
        this.empCode=_code;
        this.empName=_name;

    }
    //implementation
    gatSalary(empCode: number) : number{
        return 54000;
    }

    //custom method
    getWages(){
        console.log("hourly rate is " + 1000);
    }

}



//EntryPoint
let emp=new PermanentEmployee(1001,'Mark');
console.log(emp.empName);
console.log(emp.gatSalary(1001));
