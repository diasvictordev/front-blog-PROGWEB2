import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrousuarioComponent } from './cadastrousuario.component';

describe('CadastrousuarioComponent', () => {
  let component: CadastrousuarioComponent;
  let fixture: ComponentFixture<CadastrousuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrousuarioComponent]
    });
    fixture = TestBed.createComponent(CadastrousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
