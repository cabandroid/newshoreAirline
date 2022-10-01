import { Component, Input, OnInit } from '@angular/core';
import { DataFlight } from 'src/app/model/data-flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() dataInput: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
