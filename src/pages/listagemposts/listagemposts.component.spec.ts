import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagempostsComponent } from './listagemposts.component';

describe('ListagempostsComponent', () => {
  let component: ListagempostsComponent;
  let fixture: ComponentFixture<ListagempostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagempostsComponent]
    });
    fixture = TestBed.createComponent(ListagempostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
