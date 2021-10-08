import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ArtistsearchComponent } from './pages/artistsearch/artistsearch.component';
import { AlbumsearchComponent } from './pages/albumsearch/albumsearch.component';
import {  HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './services/api-call.service';
import { ArtistsCardsComponent } from './componentsOfPages/artists-cards/artists-cards.component';
import { AlbumsCardsComponent } from './componentsOfPages/albums-cards/albums-cards.component';
import { NavbarComponent } from './componentsOfPages/navbar/navbar.component';
import { SearchInputComponent } from './componentsOfPages/search-input/search-input.component';
// import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
   
   
         LoginPageComponent,
         ArtistsearchComponent,
         AlbumsearchComponent,
         ArtistsCardsComponent,
         AlbumsCardsComponent,
         NavbarComponent,
         SearchInputComponent,
    
 

 
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
