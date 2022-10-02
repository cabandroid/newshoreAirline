import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { DivisasPipe } from '../pipes/pipe-divisas.pipe';
import { NotFlightComponent } from './not-flight/not-flight.component';



@NgModule({
  declarations: [
    FlightComponent,
    DivisasPipe,
    NotFlightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlightComponent,
    NotFlightComponent
  ]
})
export class ResultsModule { }
