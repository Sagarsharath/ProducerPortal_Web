import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCustomizerComponent } from './chart-customizer.component';

describe('ChartCustomizerComponent', () => {
  let component: ChartCustomizerComponent;
  let fixture: ComponentFixture<ChartCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
