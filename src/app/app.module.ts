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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule } from '@angular/material';
import { AddChartDirective } from './add-chart.directive';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartCustomizerComponent,
    BarChartComponent,
    ChartRendererComponent,
    PieChartComponent,
    AddChartDirective,
    ChartDescriptorComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule
  ],
  entryComponents: [ BarChartComponent, PieChartComponent,ChartDescriptorComponent,LineChartComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
