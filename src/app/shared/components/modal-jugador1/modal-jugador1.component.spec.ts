import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJugador1Component } from './modal-jugador1.component';

describe('ModalJugador1Component', () => {
  let component: ModalJugador1Component;
  let fixture: ComponentFixture<ModalJugador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJugador1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJugador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
