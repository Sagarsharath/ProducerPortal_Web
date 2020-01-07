import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierRbPremiumRendererComponent } from './carrier-rb-premium-renderer.component';

describe('CarrierRbPremiumRendererComponent', () => {
  let component: CarrierRbPremiumRendererComponent;
  let fixture: ComponentFixture<CarrierRbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierRbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierRbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
