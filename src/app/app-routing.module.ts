import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartCustomizerComponent} from './chart-customizer/chart-customizer.component';
import { ChartRendererComponent } from './chart-renderer/chart-renderer.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
 { path: '',component:LandingPageComponent },
 {path : 'landingPage',component:LandingPageComponent},
   { path: 'app',  component: AppComponent },
  { path : 'dashboard',component: DashboardComponent},
  { path: 'charts',  component: ChartCustomizerComponent },
  { path: 'render', component: ChartRendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }