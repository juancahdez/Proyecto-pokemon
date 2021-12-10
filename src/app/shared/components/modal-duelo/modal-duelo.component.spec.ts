import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDueloComponent } from './modal-duelo.component';

describe('ModalDueloComponent', () => {
  let component: ModalDueloComponent;
  let fixture: ComponentFixture<ModalDueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
