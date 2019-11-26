import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartCustomizerComponent} from './chart-customizer/chart-customizer.component'
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { HttpClientModule} from '@angular/common/http';
import { ChartRendererComponent } from './chart-renderer/chart-renderer.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartCustomizerComponent,
    BarChartComponent,
    ChartRendererComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
