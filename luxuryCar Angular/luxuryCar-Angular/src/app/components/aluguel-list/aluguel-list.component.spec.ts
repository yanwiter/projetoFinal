import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelListComponent } from './aluguel-list.component';

describe('AluguelListComponent', () => {
  let component: AluguelListComponent;
  let fixture: ComponentFixture<AluguelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
