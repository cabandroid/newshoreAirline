import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() dataInput: any; 

  actCurrency?: any;
  constructor() { }

  ngOnInit(): void {
    this.actCurrency = localStorage.getItem('currency');
    
  }

}
