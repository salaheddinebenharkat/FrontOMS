import { Component, OnInit } from '@angular/core';
import {SquadronService} from "../squadron.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";



@Component({
  selector: 'app-all-squadrons',
  templateUrl: './all-squadrons.component.html',
  styleUrls: ['./all-squadrons.component.scss']
})
export class AllSquadronsComponent implements OnInit{

  squadrons : Array<any>;

  constructor(private squadronService:SquadronService, private _router:Router) {}

    getAllSquadrons(){
      this.squadronService.getSquadrons()
          .subscribe({
            next : data =>{
              this.squadrons = data;
            },
            error : err => {
              console.log(err)
            }
          })
    }

  ngOnInit(): void {
    this.getAllSquadrons();
  }

    handleDelete(squadron: any) {
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

                    this.squadronService.deleteSquadron(squadron)
                        .subscribe({
                            next: data => {
                                //this.getAllSquadrons();
                                this.squadrons = this.squadrons.filter(s => s.id != squadron.id);
                            }
                        })
                }
            })

    }

    handleEdit(squadron_id: any) {
        this._router.navigateByUrl('/squadrons/editSquadron/'+btoa(squadron_id));
    }
}
