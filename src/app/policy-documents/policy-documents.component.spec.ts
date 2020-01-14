import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocumentsComponent } from './policy-documents.component';

describe('PolicyDocumentsComponent', () => {
  let component: PolicyDocumentsComponent;
  let fixture: ComponentFixture<PolicyDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
