import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ParkingService} from "../parking.service";
import {ActivatedRoute, Router} from "@angular/router";
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

  airbases: Array<any>;

  constructor(private parkingService:ParkingService,
              private fb:FormBuilder,
              private _router:Router,
              private _activeRoute:ActivatedRoute) { }

  getAllAirbases() {
    this.parkingService.getAllAirbases()
        .subscribe({
          next: data => {
            this.airbases = data;
          },
          error: err => {
            console.log(err)
          }
        })
  }

  ngOnInit(): void {

    this.getAllAirbases();

    this.parkingForm = this.fb.group({
      id : this.fb.control(''),
      name : this.fb.control(''),
      airbaseId : this.fb.control(''),
      color : this.fb.control(''),
      aircraftType : this.fb.control(''),
      totalPlaces : this.fb.control('')
    })

    if ( this._router.url.includes('editParking') ) {
      //init form
      this.initializeForm();
    }

  }


  saveParking() {
    let parking = this.parkingForm.value;
    console.log('save', parking)
    this.parkingService.saveParking(parking).subscribe({
      next: data => {
        console.log('saved', parking);

        swal.fire({
          title: "Well done!",
          text: ""+(this.parkingId?'Parking updated successfully':'Parking added successfully'),
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

  initializeForm(){
    //disable form
    this.parkingForm.disable();
    //get current id from url
    this.parkingId = atob(this._activeRoute.snapshot.params.id);//atob btao
    //get airbase from backend by id
    this.parkingService.getParking(this.parkingId).subscribe((data:any)=>{
      console.log('parking',data);
      this.parkingForm.patchValue({id: data?.id});
      this.parkingForm.patchValue({name: data?.name});
      this.parkingForm.patchValue({airbaseId: data?.airbase.name});
      this.parkingForm.patchValue({color: data?.color});
      this.parkingForm.patchValue({aircraftType: data?.aircraftType});
      this.parkingForm.patchValue({totalPlaces: data?.totalPlaces});
      this.parkingForm.patchValue({description: data?.description});
      this.parkingForm.enable();
    },error => {

      //this._toastr.error('affectaion introuvable');
      //this._location.back();
    });


  }
}
