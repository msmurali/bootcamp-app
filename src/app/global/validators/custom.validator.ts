import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
  public static match = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    let controls: { [key: string]: AbstractControl } = (<FormGroup>control)
      .controls;
    let hasMatch: boolean = Object.keys(controls).every(
      (key) => controls[key].value === controls[Object.keys(controls)[0]].value
    );
    return hasMatch ? null : { match: true };
  };
}
