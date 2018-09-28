import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { App_service } from '../app.service';

@Component({
  selector: 'app-logo-component',
  templateUrl: './logo-component.component.html',
  styleUrls: ['./logo-component.component.css'],
})

export class LogoComponentComponent implements OnInit {

  form_data: any = [];
  userForm: FormGroup;
  onNew: boolean = false;
  btn_text: string = 'Save';
  updateIndex: any;

  searchText: string = ``;

  constructor(public fb: FormBuilder, public App_ser: App_service) {
    this.formCode();
  }

  ngOnInit() {
    this.App_ser.input_search_data.subscribe((user) => {
      this.searchText = user;
    })
  }

  ngAfterViewInit() {
    if (localStorage.getItem('user_data')) {
      let a = JSON.parse(localStorage.getItem('user_data'));
      setTimeout(() => {
        a.forEach((element) => {
          this.form_data.push(element);
        })
      }, 500);
    }
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

  saveData(text) {
    if (text == 'Save') {
      this.form_data.push(this.userForm.value);
      localStorage.setItem('user_data', JSON.stringify(this.form_data));
      setTimeout(() => {
        this.userForm.reset();
        this.onNew = false;
      });
    }
    else {
      this.form_data[this.updateIndex] = this.userForm.value;
      localStorage.setItem('user_data', JSON.stringify(this.form_data));
      setTimeout(() => {
        this.userForm.reset();
        this.onNew = false;
      });
    }

  }

  edit_user(data, ind) {
    this.updateIndex = ind;
    this.userForm.controls['firstName'].setValue(data.firstName);
    this.userForm.controls['lastName'].setValue(data.lastName);
    this.userForm.controls['dob'].setValue(data.dob);
    this.userForm.controls['email'].setValue(data.email);
    this.userForm.controls['country'].setValue(data.country);
    setTimeout(() => {
      this.btn_text = 'Update';
      this.onNew = true;
    })
  }

  new_form() {
    this.onNew = true;
    this.btn_text = 'Save';
    this.userForm.reset();
  }

  deleteData(ind) {
    this.form_data.splice(ind, 1);
    localStorage.setItem('user_data', JSON.stringify(this.form_data));
  }

}
