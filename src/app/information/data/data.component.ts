import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { DataFlight } from 'src/app/model/data-flight';
import { validationFields } from 'src/app/model/own-validations';
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
  datafligths?: DataFlight[];
  datafligthsfound?: DataFlight[];
  fields_equals?: boolean = false;
  flagCard: boolean = false;

  constructor(
    private dataService: DataService
  ) {

    this.formData = new FormGroup({
      departureStation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      arrivalStation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
    },{
      validators: validationFields //Validación propia para que los dos campos no sean iguales
    })
  }
  ngOnInit(): void {
    
  }
  /**
   * Suscripción al servicio
   * 
   */
  getUniqueDataFlights() {
    this.dataService.getUniqueDataFlights().subscribe(data => {
      this.datafligths = data;
    });
  }
 
  formUpperCase() {
    //Logica para pasar a Mayusculas el form
    this.origin = this.formData.get('departureStation')?.value;
    this.origin = this.origin.toUpperCase();
    this.arrival = this.formData.get('arrivalStation')?.value;
    this.arrival = this.arrival.toUpperCase();
  }

  setCurrency(current: string) {
    localStorage.setItem('currency', current);
    
  }
  
  filterFlight(){
    //Logica con filter para agarrar el objeto que se busca
    this.datafligthsfound = this.datafligths?.filter(found => found.departureStation === this.origin && found.arrivalStation === this.arrival);
    //Logica para notificar si hay o no vuelo
    if(this.datafligthsfound?.length != 0 ){
      this.flagCard = false;
    }
    else{
      this.flagCard = true;
    }
  }

  onFormSubmit() {
    this.getUniqueDataFlights();
    this.formUpperCase();
    this.filterFlight();
    
  }

}
