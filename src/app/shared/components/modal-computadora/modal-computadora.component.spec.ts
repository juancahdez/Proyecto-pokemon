import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComputadoraComponent } from './modal-computadora.component';

describe('ModalComputadoraComponent', () => {
  let component: ModalComputadoraComponent;
  let fixture: ComponentFixture<ModalComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComputadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
