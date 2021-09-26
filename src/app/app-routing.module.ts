
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginButtonComponent } from './login-button/login-button.component';


const routes: Routes = [
  {path:'',component:LoginButtonComponent},
  // {path:'artist',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  // {path:'artist/:id',component:ArtistSearchComponent,canActivate:[tokenGaurdGaurd]},
  // {path:'albums/:artist/:name',component:AlbumsSearchComponent,canActivate:[tokenGaurdGaurd]},
  // {path:'**',redirectTo:'',pathMatch:'full'},
]
const Routes=[

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
