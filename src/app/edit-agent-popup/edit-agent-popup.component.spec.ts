import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgentPopupComponent } from './edit-agent-popup.component';

describe('EditAgentPopupComponent', () => {
  let component: EditAgentPopupComponent;
  let fixture: ComponentFixture<EditAgentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
