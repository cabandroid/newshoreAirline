import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() dataInput: any; 

  actCurrency?: any;
  flagCard?: any;
  constructor() { }

  ngOnInit(): void {
    this.actCurrency = localStorage.getItem('currency');
    this.notFoundFlight();
  }

  notFoundFlight(){
    console.log(this.dataInput);
    if(this.dataInput.length !== 0){
      console.log('Si hay');
      this.flagCard = true;
    }else{
      this.flagCard = false;
      console.log('No hay');
    }
  }

}
