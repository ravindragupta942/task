import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { App_service } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  search_user: any = new FormControl('');


  constructor(public App_ser: App_service) { }

  ngOnInit() {
    this.search_user.valueChanges
      .subscribe((value: any) => {
        this.App_ser.onEnter(value);
      });
  }

}
