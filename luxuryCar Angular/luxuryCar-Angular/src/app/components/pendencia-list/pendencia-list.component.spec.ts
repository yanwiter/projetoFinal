import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenciaListComponent } from './pendencia-list.component';

describe('PendenciaListComponent', () => {
  let component: PendenciaListComponent;
  let fixture: ComponentFixture<PendenciaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendenciaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
