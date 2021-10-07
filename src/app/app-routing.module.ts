
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AlbumsearchComponent } from './pages/albumsearch/albumsearch.component';
import { ArtistsearchComponent } from './pages/artistsearch/artistsearch.component';


import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'artist/:slayquery', component: ArtistsearchComponent,canActivate: [AuthGuard]  },
  // , canActivate: [AuthGuard] 
  { path: 'albums/:id/:artistName', component: AlbumsearchComponent },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
