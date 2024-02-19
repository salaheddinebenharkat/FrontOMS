import { Component, OnInit } from '@angular/core';
import {SquadronService} from "../squadron.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-squadron',
  templateUrl: './new-squadron.component.html',
  styleUrls: ['./new-squadron.component.scss']
})
export class NewSQuadronComponent implements OnInit {

    squadronForm!:FormGroup;

    date: Date = new Date();
    airbases : Array<any> =[];

    squadronId;

  constructor(private squadronService:SquadronService,
              private fb:FormBuilder,
              private _router:Router,
              private _activeRoute:ActivatedRoute) { }

    getAllAirbases() {
        this.squadronService.getAirbases()
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

      this.squadronForm = this.fb.group({
        id : this.fb.control(''),
        name : this.fb.control(''),
        creationDate : this.fb.control(''),
        aircraftType : this.fb.control(''),
        totalAircraft : this.fb.control(''),
        description : this.fb.control(''),
      });

      this.getAllAirbases();

      if ( this._router.url.includes('editSquadron') ) {
          //init form
          this.initializeForm();
      }
  }

    saveSquadron() {
        let squadron = this.squadronForm.value;
        console.log(squadron);
        this.squadronService.saveSquadron(squadron).subscribe({
            next: data => {
                console.log('saved', squadron);

                swal.fire({
                    title: "Well done!",
                    text: "" + this.squadronId? 'Squadron updated successfully' : 'Squadron added successfully',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                    icon: "success"
                }).then(result => {
                        if (result.value) {
                             //this._router.
                        }
                    }
                )
            },
            error: err => {
                console.log(err);
            }
        })
    }


    private initializeForm() {
        this.squadronForm.disable();
        //get current id from url
        this.squadronId = atob(this._activeRoute.snapshot.params.id);//atob btao
        //get airbase from backend by id
        this.squadronService.getSquadron(this.squadronId).subscribe((data:any)=>{
            console.log('squadron',data);

            this.squadronForm.patchValue({id: data?.id});
            this.squadronForm.patchValue({name: data?.name});
            this.squadronForm.patchValue({creationDate: new Date(data?.creationDate)});
            this.squadronForm.patchValue({aircraftType: data?.aircraftType});
            this.squadronForm.patchValue({totalAircraft: data?.totalAircraft});
            this.squadronForm.patchValue({description: data?.description});
            this.squadronForm.enable();
        },error => {

            //this._toastr.error('affectaion introuvable');
            //this._location.back();
        });
    }
}
