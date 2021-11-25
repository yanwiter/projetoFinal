import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPendenciaVeicularComponent } from './cadastrar-pendencia-veicular.component';

describe('CadastrarPendenciaVeicularComponent', () => {
  let component: CadastrarPendenciaVeicularComponent;
  let fixture: ComponentFixture<CadastrarPendenciaVeicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPendenciaVeicularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPendenciaVeicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
