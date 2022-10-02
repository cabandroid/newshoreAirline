import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

/*export class OwnValidations {

    static validationFields(control: FormControl): ValidationErrors{
        let origin = control.get('departureStation')?.value; 
        let destiny = control.get('arrivalStation')?.value; 

        if (origin !== destiny){
            control.get('arrivalStation')?.setErrors({FieldsMatch : true});
        }else{
            return null;
        }
    }*/

export const validationFields: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const origin = control.get('departureStation')
    const destiny = control.get('arrivalStation')

    return origin?.value !== destiny?.value
        ? null
        : { noSonIguales: true }
}

