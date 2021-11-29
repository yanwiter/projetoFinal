import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarVeiculoComponent } from './deletar-veiculo.component';

describe('DeletarVeiculoComponent', () => {
  let component: DeletarVeiculoComponent;
  let fixture: ComponentFixture<DeletarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
