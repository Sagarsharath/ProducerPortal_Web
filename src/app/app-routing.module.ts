import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartCustomizerComponent} from './chart-customizer/chart-customizer.component';
import { ChartRendererComponent } from './chart-renderer/chart-renderer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app',  component: AppComponent },
  { path: 'charts',  component: ChartCustomizerComponent },
  { path: 'render', component: ChartRendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }