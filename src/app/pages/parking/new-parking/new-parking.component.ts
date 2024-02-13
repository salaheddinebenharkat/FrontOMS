import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
