import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoDescriptorComponent } from './additional-info-descriptor.component';

describe('AdditionalInfoDescriptorComponent', () => {
  let component: AdditionalInfoDescriptorComponent;
  let fixture: ComponentFixture<AdditionalInfoDescriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInfoDescriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
