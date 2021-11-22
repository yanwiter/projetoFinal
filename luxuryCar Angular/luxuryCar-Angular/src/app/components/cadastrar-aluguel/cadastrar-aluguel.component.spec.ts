import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAluguelComponent } from './cadastrar-aluguel.component';

describe('CadastrarAluguelComponent', () => {
  let component: CadastrarAluguelComponent;
  let fixture: ComponentFixture<CadastrarAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAluguelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
