import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCustomizerComponent } from './bar-chart-customizer.component';

describe('BarChartCustomizerComponent', () => {
  let component: BarChartCustomizerComponent;
  let fixture: ComponentFixture<BarChartCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
