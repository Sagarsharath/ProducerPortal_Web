import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobRbPremiumRendererComponent } from './lob-rb-premium-renderer.component';

describe('LobRbPremiumRendererComponent', () => {
  let component: LobRbPremiumRendererComponent;
  let fixture: ComponentFixture<LobRbPremiumRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobRbPremiumRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobRbPremiumRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
