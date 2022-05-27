import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  public static match(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    let formControls: { [key: string]: AbstractControl } = (<FormGroup>control)
      .controls;

    let hasMatch: boolean = Object.keys(formControls).every((key) => {
      formControls[key].value ===
        formControls[Object.keys(formControls)[0]].value;
    });

    return hasMatch ? null : { match: true };
  }
}
