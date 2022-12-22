import { CricketCoach } from "./CricketCoach.js";
import { GolfCoach } from "./GolfCoach.js";
import { ICoach } from "./ICoach.js";
//create an object
let cricketCoach=new CricketCoach();
let golfCoach=new GolfCoach();
//Declare an array for coaches
let theCoches:ICoach[]=[]
//add the coacges to ahe array
theCoches.push(cricketCoach);
theCoches.push(golfCoach);

//print the output
for(let coach of theCoches){
    console.log(coach.getDailyWorkOut() );
}
