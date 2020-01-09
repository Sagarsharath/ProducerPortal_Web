import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingBrochureComponent } from './marketing-brochure.component';

describe('MarketingBrochureComponent', () => {
  let component: MarketingBrochureComponent;
  let fixture: ComponentFixture<MarketingBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
