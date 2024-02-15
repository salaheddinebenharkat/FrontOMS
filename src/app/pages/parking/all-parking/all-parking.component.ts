import { Component, OnInit } from '@angular/core';
import {ParkingService} from "../parking.service";

@Component({
  selector: 'app-all-parking',
  templateUrl: './all-parking.component.html',
  styleUrls: ['./all-parking.component.scss']
})
export class AllParkingComponent implements OnInit {

  parking : Array<any>;

  constructor(private parkingService:ParkingService) { }

  getAllParking(){
    this.parkingService.getAllParking()
        .subscribe({
          next : data =>{
            this.parking = data;
          },
          error : err => {
            console.log(err);
          }
        })
  }

  ngOnInit(): void {
    this.getAllParking();
  }

}
