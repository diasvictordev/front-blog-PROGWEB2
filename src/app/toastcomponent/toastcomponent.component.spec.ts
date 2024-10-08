import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastcomponentComponent } from './toastcomponent.component';

describe('ToastcomponentComponent', () => {
  let component: ToastcomponentComponent;
  let fixture: ComponentFixture<ToastcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastcomponentComponent]
    });
    fixture = TestBed.createComponent(ToastcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
