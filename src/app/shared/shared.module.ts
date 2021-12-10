import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalJugador1Component } from './components/modal-jugador1/modal-jugador1.component';
import { ModalJugador2Component } from './components/modal-jugador2/modal-jugador2.component';
import { ModalDueloComponent } from './components/modal-duelo/modal-duelo.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    ModalJugador1Component,
    ModalJugador2Component,
    ModalDueloComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:{
      ModalJugador1Component,
      ModalJugador2Component,
      ModalDueloComponent
  }
})
export class SharedModule { }
