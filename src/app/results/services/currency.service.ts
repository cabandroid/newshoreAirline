import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {

  }

  conversionCOP(money: number): number{
    return money*4610;
  }
  conversionBRL(money: number): number{
    return money*5.41;
  }
  conversionUSD(money: number): number{
    return money*1;
  }

}
