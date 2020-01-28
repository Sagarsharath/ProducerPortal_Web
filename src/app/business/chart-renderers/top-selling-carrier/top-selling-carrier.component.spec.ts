import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingCarrierComponent } from './top-selling-carrier.component';

describe('TopSellingCarrierComponent', () => {
  let component: TopSellingCarrierComponent;
  let fixture: ComponentFixture<TopSellingCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSellingCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
