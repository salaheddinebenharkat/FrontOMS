import { Component, OnInit } from '@angular/core';
import {SquadronService} from "../squadron.service";



@Component({
  selector: 'app-all-squadrons',
  templateUrl: './all-squadrons.component.html',
  styleUrls: ['./all-squadrons.component.scss']
})
export class AllSquadronsComponent implements OnInit{

  squadrons : Array<any>;

  constructor(private squadronService:SquadronService) {}

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
      if (confirm("Are you sure ?"))
    this.squadronService.deleteSquadron(squadron)
        .subscribe({
          next:data => {
            //this.getAllSquadrons();
            this.squadrons = this.squadrons.filter(s=>s.id!=squadron.id);
          }
        })
  }
}
