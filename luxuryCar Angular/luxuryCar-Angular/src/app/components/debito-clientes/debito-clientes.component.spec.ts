import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitoClientesComponent } from './debito-clientes.component';

describe('DebitoClientesComponent', () => {
  let component: DebitoClientesComponent;
  let fixture: ComponentFixture<DebitoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitoClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
