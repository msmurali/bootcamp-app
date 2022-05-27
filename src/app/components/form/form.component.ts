import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({ selector: 'app-form', templateUrl: './form.component.html' })
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: [''],
      email: [''],
      passwordGroup: this.fb.group({
        password: [''],
        confirmPassword: [''],
      }),
      profession: [''],
      course: [''],
      addressGroup: this.fb.group({
        street: [''],
        city: [''],
        pincode: [''],
      }),
      phoneNumber: [''],
      subscribe: [false],
    });
  }

  get usename() {
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
}
