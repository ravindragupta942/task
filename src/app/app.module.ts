import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LogoComponentComponent } from './logo-component/logo-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResgistrationComponentComponent } from './resgistration-component/resgistration-component.component';
import {path_route} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponentComponent,
    HomeComponentComponent,
    ResgistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    path_route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
