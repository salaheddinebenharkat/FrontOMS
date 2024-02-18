import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AirbasesService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAirbases() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiServerUrl}/api/airbases/all`);
  }
  public getAirbase(id){
    return this.http.get(`${this.apiServerUrl}/api/airbases/${id}`);
  }

  public deleteAirbase(airbase:any){
    return this.http.delete<any>(`${this.apiServerUrl}/api/airbases/${airbase.id}`);
  }

  saveAirbase(airbase: any) {
    return this.http.post<any>(`${this.apiServerUrl}/api/airbases/add`,airbase);
  }
}
