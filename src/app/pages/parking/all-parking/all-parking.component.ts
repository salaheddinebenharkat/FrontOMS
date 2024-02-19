import { Component, OnInit } from '@angular/core';
import {ParkingService} from "../parking.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-parking',
  templateUrl: './all-parking.component.html',
  styleUrls: ['./all-parking.component.scss']
})
export class AllParkingComponent implements OnInit {

  parkings : Array<any>;

  constructor(private parkingService:ParkingService,
              private _router: Router) { }

  getAllParking(){
    this.parkingService.getAllParking()
        .subscribe({
          next : data =>{
            this.parkings = data;
          },
          error : err => {
            console.log(err);
          }
        })
  }

  ngOnInit(): void {
    this.getAllParking();
  }


    handleDelete(park: any) {
        swal.fire({
            title: "Are you sure?",
            text: "You will not be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            customClass: {
                cancelButton: "btn btn-danger",
                confirmButton: "btn btn-success mr-1",
            },
            confirmButtonText: "Delete",
            buttonsStyling: false
        })
            .then(result => {//subscribe
                if (result.value) {
                    this.parkingService.deleteParking(park)
                        .subscribe({
                            next:data => {
                                //this.getAllSquadrons();
                                this.parkings = this.parkings.filter(p=>p.id!=park.id);
                            }
                        })
                }
            })
    }

    handleEdit(parking_id) {
        this._router.navigateByUrl('/parking/editParking/'+btoa(parking_id));
    }
}
