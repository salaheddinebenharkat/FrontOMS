import {UrlWithStringQuery} from "node:url";

export interface SquadronModel{

    id:number,
    name:String,
    airbase:String,
    creationDate:Date,
    aircraftType:String,
    totalAircraft:number,
    description:String,
}