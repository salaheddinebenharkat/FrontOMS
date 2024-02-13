import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import DevExpress from "devextreme";
import data = DevExpress.data;
import {SquadronService} from "../squadron.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-squadron',
  templateUrl: './new-squadron.component.html',
  styleUrls: ['./new-squadron.component.scss']
})
export class NewSQuadronComponent implements OnInit {

    squadronForm!:FormGroup;

    date: Date = new Date();
    airbases : Array<any> =[];

  constructor(private squadronService:SquadronService, private fb:FormBuilder) { }

  getAllAirbases(){
    this.squadronService.getAirbases()
        .subscribe({
          next : data =>{
            this.airbases = data;
          },
          error : err => {
            console.log(err)
          }
        })
  }


  ngOnInit(): void {

      this.squadronForm = this.fb.group({
        name : this.fb.control(''),
        airbase : this.fb.control(1),
        creationDate : this.fb.control(''),
        aircraftType : this.fb.control(''),
        totalAircraft : this.fb.control(0),
        description : this.fb.control(''),
      });

      this.getAllAirbases();
  }

    saveSquadron() {
        let squadron = this.squadronForm.value;
        this.squadronService.saveSquadron(squadron).subscribe({
            next : data =>{
                console.log(squadron);
                alert(JSON.stringify(data));
            },
            error : err =>{
                console.log(err);
            }
        })
    }
}
