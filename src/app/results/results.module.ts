import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { DivisasPipe } from '../pipes/pipe-divisas.pipe';



@NgModule({
  declarations: [
    FlightComponent,
    DivisasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlightComponent
  ]
})
export class ResultsModule { }
