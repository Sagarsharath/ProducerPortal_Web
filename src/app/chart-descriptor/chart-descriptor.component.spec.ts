import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDescriptorComponent } from './chart-descriptor.component';

describe('ChartDescriptorComponent', () => {
  let component: ChartDescriptorComponent;
  let fixture: ComponentFixture<ChartDescriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDescriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
