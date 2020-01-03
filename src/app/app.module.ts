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
import { RbPremiumRendererComponent } from './business/renderers/rb-premium-renderer/rb-premium-renderer.component';
import { LobRbPremiumRendererComponent } from './business/renderers/lob-rb-premium-renderer/lob-rb-premium-renderer.component';
import { CarrierRbPremiumRendererComponent } from './business/renderers/carrier-rb-premium-renderer/carrier-rb-premium-renderer.component';
import { CarrierNbPremiumRendererComponent } from './business/renderers/carrier-nb-premium-renderer/carrier-nb-premium-renderer.component';
import { PifReportRendererComponent } from './business/renderers/pif-report-renderer/pif-report-renderer.component';
import { NbRbMonthlyReportRendererComponent } from './business/renderers/nb-rb-monthly-report-renderer/nb-rb-monthly-report-renderer.component';
import { NbRbComparisionReportRendererComponent } from './business/renderers/nb-rb-comparision-report-renderer/nb-rb-comparision-report-renderer.component';
import { DoughnutChartComponent } from './ng-charts/doughnut-chart/doughnut-chart.component';
import { NbRbYearlyReportRendererComponent } from './business/renderers/nb-rb-yearly-report-renderer/nb-rb-yearly-report-renderer.component';
import { DoughnutChartCustomizerComponent } from './chart-customizers/additional-info-customizer/doughnut-chart-customizer/doughnut-chart-customizer.component';

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
    LobReportComponent,
    RbPremiumRendererComponent,
    LobRbPremiumRendererComponent,
    CarrierRbPremiumRendererComponent,
    CarrierNbPremiumRendererComponent,
    PifReportRendererComponent,
    NbRbMonthlyReportRendererComponent,
    NbRbComparisionReportRendererComponent,
    DoughnutChartComponent,
    NbRbYearlyReportRendererComponent,
    DoughnutChartCustomizerComponent
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
