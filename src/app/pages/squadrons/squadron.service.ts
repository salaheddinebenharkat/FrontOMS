import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SquadronService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAirbases() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiServerUrl}/api/airbases/all`);
  }

  public getSquadrons() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiServerUrl}/api/squadrons/all`);
  }

  public deleteSquadron(squadron:any){
    return this.http.delete<any>(`${this.apiServerUrl}/api/squadrons/${squadron.id}`);
  }

  saveSquadron(squadron: any) {
    return this.http.post<any>(`${this.apiServerUrl}/api/squadrons/add`,squadron);
  }
}
