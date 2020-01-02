import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobNbPremiumRendererComponent } from './lob-nb-premium-renderer.component';

describe('LobNbPremiumRendererComponent', () => {
  let component: LobNbPremiumRendererComponent;
  let fixture: ComponentFixture<LobNbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobNbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobNbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
