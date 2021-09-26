import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LoginButtonComponent } from './login-button/login-button.component';
// import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
   
    LoginButtonComponent,
 

 
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
