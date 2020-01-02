import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartCustomizerComponent } from './pie-chart-customizer.component';

describe('PieChartCustomizerComponent', () => {
  let component: PieChartCustomizerComponent;
  let fixture: ComponentFixture<PieChartCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
