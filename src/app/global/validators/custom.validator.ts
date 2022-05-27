import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  match(control: AbstractControl): { [key: string]: any } | null {
    let formControls = (<FormGroup>control).controls;
    let first = formControls[Object.keys(formControls)[0]];

    let hasMatch = Object.keys(formControls).every((key) => {
      formControls[key].value === first.value;
    });

    return hasMatch ? null : { match: true };
  }
}
