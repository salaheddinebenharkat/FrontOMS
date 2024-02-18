import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ParkingService} from "../parking.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {
  date: Date = new Date();

  parkingForm:FormGroup;

  parkingId;

  constructor(private parkingService:ParkingService,
              private fb:FormBuilder,
              private _router:Router) { }

  ngOnInit(): void {

    this.parkingForm = this.fb.group({
      id : this.fb.control(''),
      name : this.fb.control(''),
      color : this.fb.control(''),
      aircraftType : this.fb.control(''),
      totalPlaces : this.fb.control('')
    })

  }


  saveParking() {
    let parking = this.parkingForm.value;
    console.log('save', parking)
    this.parkingService.saveParking(parking).subscribe({
      next: data => {
        console.log('saved', parking);

        swal.fire({
          title: "Well done!",
          text: "" + this.parkingId ? 'Airbase updated successfully' : 'Airbase added successfully',
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-success",
          },
          icon: "success"
        }).then(result =>{
              if (result.value){
                // this._router.
              }
            }
        )
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
