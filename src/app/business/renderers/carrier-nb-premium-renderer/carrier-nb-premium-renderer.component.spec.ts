import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierNbPremiumRendererComponent } from './carrier-nb-premium-renderer.component';

describe('CarrierNbPremiumRendererComponent', () => {
  let component: CarrierNbPremiumRendererComponent;
  let fixture: ComponentFixture<CarrierNbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierNbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierNbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
