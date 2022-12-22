import { ICoach } from "./ICoach.js";

export class GolfCoach implements ICoach{
    getDailyWorkOut(): String {
        return "Hit 100 balls at the golf range."

}
}