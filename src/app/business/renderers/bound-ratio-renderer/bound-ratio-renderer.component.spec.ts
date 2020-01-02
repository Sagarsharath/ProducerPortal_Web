import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundRatioRendererComponent } from './bound-ratio-renderer.component';

describe('BoundRatioRendererComponent', () => {
  let component: BoundRatioRendererComponent;
  let fixture: ComponentFixture<BoundRatioRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundRatioRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundRatioRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
