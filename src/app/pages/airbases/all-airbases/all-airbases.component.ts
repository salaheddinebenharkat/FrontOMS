import { Component, OnInit } from '@angular/core';
import {AirbasesService} from "../airbases.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";


@Component({
  selector: 'app-all-airbases',
  templateUrl: './all-airbases.component.html',
  styleUrls: ['./all-airbases.component.scss']
})
export class AllAirbasesComponent implements OnInit {

  airbases : Array<any>;

  constructor(private airbasesService:AirbasesService,private _router:Router) {

  }

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
                    this.airbasesService.deleteAirbase(airbase)
                        .subscribe({
                            next:data => {
                                //this.getAllSquadrons();
                                this.airbases = this.airbases.filter(s=>s.id!=airbase.id);
                            }
                        })
                }
            })
  }

    handleEdit(airbase_id: any) {
        this._router.navigateByUrl('/airbases/editAirbase/'+btoa(airbase_id));
    }
}
