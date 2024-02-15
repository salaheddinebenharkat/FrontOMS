import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAllParking() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiServerUrl}/api/parking/all`);
  }

  public deleteParking(parking:any){
    return this.http.delete<any>(`${this.apiServerUrl}/api/parking/${parking.id}`);
  }

  saveParking(parking: any) {
    return this.http.post<any>(`${this.apiServerUrl}/api/parking/add`,parking);
  }
}
