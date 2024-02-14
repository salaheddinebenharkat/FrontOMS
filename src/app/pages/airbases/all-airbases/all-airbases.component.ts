import { Component, OnInit } from '@angular/core';
import {AirbasesService} from "../airbases.service";

@Component({
  selector: 'app-all-airbases',
  templateUrl: './all-airbases.component.html',
  styleUrls: ['./all-airbases.component.scss']
})
export class AllAirbasesComponent implements OnInit {

  airbases : Array<any>;
  constructor(private airbasesService:AirbasesService) { }

  getAllAirbases(){
    this.airbasesService.getAirbases()
        .subscribe({
          next : data =>{
            this.airbases = data;
            console.log(this.airbases);
          },
          error : err => {
            console.log(err)
          }
        })
  }

  ngOnInit(): void {
    this.getAllAirbases();
  }

    handleDelete(airbase: any) {
        if (confirm("Are you sure ?"))
            this.airbasesService.deleteAirbase(airbase)
                .subscribe({
                    next:data => {
                        //this.getAllSquadrons();
                        this.airbases = this.airbases.filter(s=>s.id!=airbase.id);
                    }
                })
    }

}
