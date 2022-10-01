import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';



@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlightComponent
  ]
})
export class ResultsModule { }
