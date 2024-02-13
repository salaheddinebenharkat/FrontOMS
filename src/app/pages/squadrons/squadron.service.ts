import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SquadronService {

  constructor(private http:HttpClient) { }

  public getAirbases() : Observable<Array<any>>{
    return this.http.get<Array<any>>("http://localhost:8080/api/airbases/all");
  }

  public getSquadrons() : Observable<Array<any>>{
    return this.http.get<Array<any>>("http://localhost:8080/api/squadrons/all");
  }

  public deleteSquadron(squadron:any){
    return this.http.delete<any>(`http://localhost:8080/api/squadrons/${squadron.id}`);
  }

  saveSquadron(squadron: any) {
    return this.http.post<any>("http://localhost:8080/api/airbases/add",squadron);
  }
}
