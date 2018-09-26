import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-logo-component',
  templateUrl: './logo-component.component.html',
  styleUrls: ['./logo-component.component.css']
})
export class LogoComponentComponent implements OnInit {

  form_data: any;
  userForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formCode();
  }

  ngOnInit() {
  }

  formCode() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  saveData() {
    console.log("check data ", this.userForm.value);
  }

}
