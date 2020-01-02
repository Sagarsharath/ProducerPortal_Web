import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common'
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BarChartCustomizerComponent } from './chart-customizers/additional-info-customizer/bar-chart-customizer/bar-chart-customizer.component';
import { NbPremiumRendererComponent } from './business/renderers/nb-premium-renderer/nb-premium-renderer.component';

import { BarChartComponent } from './ng-charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './ng-charts/line-chart/line-chart.component';
import { InitializeChart } from './chart-customizers/initializeChart.directive';
import { AdditionalInfoDescriptorComponent } from './chart-customizers/additional-info-customizer/additional-info-descriptor/additional-info-descriptor.component';
import { PieChartComponent } from './ng-charts/pie-chart/pie-chart.component';
import { PieChartCustomizerComponent } from './chart-customizers/additional-info-customizer/pie-chart-customizer/pie-chart-customizer.component';
import { BoundRatioRendererComponent } from './business/renderers/bound-ratio-renderer/bound-ratio-renderer.component';
import { LobNbPremiumRendererComponent } from './business/renderers/lob-nb-premium-renderer/lob-nb-premium-renderer.component';
import { PremiumReportComponent } from './business/premium-report/premium-report.component';
import { BoundReportComponent } from './business/bound-report/bound-report.component';
import { LobReportComponent } from './business/lob-report/lob-report.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    BarChartCustomizerComponent,
    NbPremiumRendererComponent,
    InitializeChart,
    AdditionalInfoDescriptorComponent,
    PieChartComponent,
    PieChartCustomizerComponent,
    BoundRatioRendererComponent,
    LobNbPremiumRendererComponent,
    PremiumReportComponent,
    BoundReportComponent,
    LobReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
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
    MatCheckboxModule, MatToolbarModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
