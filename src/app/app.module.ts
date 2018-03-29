import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';

import {AuthenticationService, UserService} from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ UserService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
