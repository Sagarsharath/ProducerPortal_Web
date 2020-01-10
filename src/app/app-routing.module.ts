import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGaurdService } from './Services/authentication-gaurd.service';
const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent},
  //{ path: 'landingPage', component: LandingPageComponent},
   { path: 'landingPage', component: LandingPageComponent,canActivate:[AuthenticationGaurdService] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }