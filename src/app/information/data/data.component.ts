import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  formData: FormGroup;
  origin: string = "";
  arrival: string = "";
  fligths!: any[];

  constructor(
    private dataService: DataService
  ) {

    this.formData = new FormGroup({
      departureStation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      arrivalStation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    })

   }

  ngOnInit(): void {
    this.onFormSubmit();
  }

  /**
   * Suscripción al servicio
   * 
   */

   getUniqueDataFlights(){

    this.dataService.getUniqueDataFlights().subscribe(data => {
      this.formUpperCase();
      console.log("Origen: "+this.origin+", Destino: "+this.arrival);
      //----//
      console.log(data);


    });

   }

   filterData(data: any){
    return this.fligths.filter(function(element){
      element.departureStation = data.origin;
    })

   }
   formUpperCase(){
    //Logica para pasar a Mayusculas el form
    this.origin = this.formData.get('departureStation')?.value;
    this.origin = this.origin.toUpperCase();
    this.arrival = this.formData.get('arrivalStation')?.value;
    this.arrival = this.arrival.toUpperCase();
   }

   onFormSubmit(){
    
    //console.log(this.formData.value);
    this.getUniqueDataFlights();
      
   }


}
