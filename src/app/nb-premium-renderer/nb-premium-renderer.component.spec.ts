import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPremiumRendererComponent } from './nb-premium-renderer.component';

describe('NbPremiumRendererComponent', () => {
  let component: NbPremiumRendererComponent;
  let fixture: ComponentFixture<NbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
