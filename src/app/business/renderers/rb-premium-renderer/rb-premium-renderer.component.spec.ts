import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbPremiumRendererComponent } from './rb-premium-renderer.component';

describe('RbPremiumRendererComponent', () => {
  let component: RbPremiumRendererComponent;
  let fixture: ComponentFixture<RbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
