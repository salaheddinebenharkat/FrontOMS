import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-parking',
  templateUrl: './all-parking.component.html',
  styleUrls: ['./all-parking.component.scss']
})
export class AllParkingComponent implements OnInit {

  parking : Array<any>=[
    {id:1, name:"Parking A", color:"red", airbase:"DUKHAN", aircraftType:"TYPHON", totalPlaces:10},
    {id:2, name:"Parking B", color:"green", airbase:"EL ODEID", aircraftType:"RAFALE", totalPlaces:10},
    {id:3, name:"Parking C", color:"red", airbase:"DOHA", aircraftType:"APACHE", totalPlaces:10},
    {id:4, name:"Parking D", color:"green", airbase:"DUKHAN", aircraftType:"TYPHON", totalPlaces:10},
    {id:5, name:"Parking E", color:"red", airbase:"EL ODEID", aircraftType:"RAFALE", totalPlaces:10},
    {id:6, name:"Parking F", color:"green", airbase:"DOHA", aircraftType:"APACHE", totalPlaces:10},
    {id:7, name:"Parking G", color:"red", airbase:"DUKHAN", aircraftType:"TYPHON", totalPlaces:10}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
