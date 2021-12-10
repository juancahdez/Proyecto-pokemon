import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJugador2Component } from './modal-jugador2.component';

describe('ModalJugador2Component', () => {
  let component: ModalJugador2Component;
  let fixture: ComponentFixture<ModalJugador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJugador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJugador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
