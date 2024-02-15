import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AirbasesService} from "../airbases.service";

@Component({
  selector: 'app-new-airbase',
  templateUrl: './new-airbase.component.html',
  styleUrls: ['./new-airbase.component.scss']
})
export class NewAirbaseComponent implements OnInit {

  airbaseForm:FormGroup;

  date: Date | undefined;

  constructor(private airbaseService:AirbasesService, private fb:FormBuilder) { }

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
      name : this.fb.control(''),
      city : this.fb.control(''),
      latitude : this.fb.control(''),
      longitude : this.fb.control(''),
      surface : this.fb.control(''),
      creationDate : this.fb.control(''),
      description : this.fb.control(''),
    });
  }

  saveAirbase() {
    let airbase = this.airbaseForm.value;
    console.log(airbase);
    this.airbaseService.saveAirbase(airbase).subscribe({
      next : data =>{
        console.log('saved',airbase);
        //alert(JSON.stringify(data));
      },
      error : err =>{
        console.log(err);
      }
    })
  }

}
