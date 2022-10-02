import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../results/services/currency.service';

@Pipe({
  name: 'conversion'
})
export class DivisasPipe implements PipeTransform {

  currency: any;

  constructor(private currencyService: CurrencyService){

  }

  transform(value: number): any {
    let actCurrency = localStorage.getItem('currency');

    if (actCurrency === 'USD') {
      return this.currencyService.conversionUSD(value);
    }
    if (actCurrency === 'COP') {
      return this.currencyService.conversionCOP(value);
      console.log(value);
    }
    if (actCurrency === 'BRL') {
      return this.currencyService.conversionBRL(value);
    }
    else{ return this.currencyService.conversionUSD(value);}
  }

}
