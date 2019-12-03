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
import { AddChartDirective } from './add-chart.directive';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule, 
  MatToolbar,
  MatToolbarModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';

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
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
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
    MatTableModule,
    MatCheckboxModule,MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ BarChartComponent, PieChartComponent,ChartDescriptorComponent,LineChartComponent ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
