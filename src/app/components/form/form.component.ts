import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { CustomValidators } from '../../global/validators/custom.validator';

@Component({ selector: 'app-form', templateUrl: './form.component.html' })
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: apiService) {}

  registrationForm: FormGroup;

  status: string = 'idle';

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        },
        { validator: CustomValidators.match }
      ),
      profession: ['', [Validators.required]],
      course: ['', [Validators.required]],
      addressGroup: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        pincode: [
          '',
          [Validators.required, Validators.pattern(new RegExp(/^\d+$/))],
        ],
      }),
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(new RegExp(/^\d{10}$/))],
      ],
      subscribe: [false],
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get passwordGroup() {
    return this.registrationForm.get('passwordGroup');
  }

  get password() {
    return this.registrationForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.registrationForm.get('passwordGroup.confirmPassword');
  }

  get profession() {
    return this.registrationForm.get('profession');
  }

  get course() {
    return this.registrationForm.get('course');
  }

  get addressGroup() {
    return this.registrationForm.get('addressGroup');
  }

  get street() {
    return this.registrationForm.get('addressGroup.street');
  }

  get city() {
    return this.registrationForm.get('addressGroup.city');
  }

  get pincode() {
    return this.registrationForm.get('addressGroup.pincode');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  resetStatus() {
    setTimeout(() => {
      this.status = 'idle';
    }, 3000);
  }

  submitHandler() {
    if (this.registrationForm.valid) {
      this.apiService.register(this.registrationForm.value).subscribe(
        (response) => {
          this.status = 'success';
          this.resetStatus();
        },
        (error) => {
          this.resetStatus();
        }
      );
    }
  }
}
