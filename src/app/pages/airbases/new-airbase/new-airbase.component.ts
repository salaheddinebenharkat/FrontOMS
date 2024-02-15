import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AirbasesService} from "../airbases.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SwalService} from "../../../swal.service";

@Component({
  selector: 'app-new-airbase',
  templateUrl: './new-airbase.component.html',
  styleUrls: ['./new-airbase.component.scss']
})
export class NewAirbaseComponent implements OnInit {

  airbaseForm:FormGroup;

  date: Date | undefined;

  airbaseId;

  constructor(
      private airbaseService:AirbasesService,
      private fb:FormBuilder,
      private _activeRoute:ActivatedRoute,
      private swal:SwalService,
      private _router:Router) { }

  ngOnInit(): void {
    /*
    private String name;
    private String city;
    private String latitude;
    private String longitude;
    private String surface;
    private Date creationDate;
     */

    this.airbaseForm = this.fb.group({
      id : this.fb.control(''),
      name : this.fb.control(''),
      city : this.fb.control(''),
      latitude : this.fb.control(''),
      longitude : this.fb.control(''),
      surface : this.fb.control(''),
      creationDate : this.fb.control(''),
      description : this.fb.control(''),
    });

    if ( this._router.url.includes('editAirbase') ) {
      //init form
      this.initializeForm();
    }
  }

  saveAirbase() {
    let airbase = this.airbaseForm.value;
    console.log('save',airbase)
    this.airbaseService.saveAirbase(airbase).subscribe({
      next : data =>{
        this.swal.showSwal('basic','airbase saved');
        console.log('saved',airbase);
        //alert(JSON.stringify(data));
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  initializeForm(){
    //disable form
    this.airbaseForm.disable();
    //get current id from url
    this.airbaseId = atob(this._activeRoute.snapshot.params.id);//atob btao
    //get airbase from backend by id
    this.airbaseService.getAirbase(this.airbaseId).subscribe((data:any)=>{
      console.log('airbase',data);
      this.airbaseForm.patchValue({id: data?.id});
      this.airbaseForm.patchValue({name: data?.name});
      this.airbaseForm.patchValue({city: data?.city});
      this.airbaseForm.patchValue({latitude: data?.latitude});
      this.airbaseForm.patchValue({longitude: data?.longitude});
      this.airbaseForm.patchValue({surface: data?.surface});
      this.airbaseForm.patchValue({creationDate: new Date(data?.creationDate)});
      this.airbaseForm.patchValue({description: data?.description});
      this.airbaseForm.enable();
    },error => {

      //this._toastr.error('affectaion introuvable');
      //this._location.back();
    });


  }
}
