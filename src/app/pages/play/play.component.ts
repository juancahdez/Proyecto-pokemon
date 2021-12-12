import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterContrains } from 'src/app/routers/routers';
import { ModalJugador1Component } from 'src/app/shared/components/modal-jugador1/modal-jugador1.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // metodo para abrirl la modal del jugador 1 con el duelo contra el jugador2
  public duelo1(): void {
    this.dialog.open(ModalJugador1Component, {
      data: 'jugador'
    });
  }
    // metodo para abrirl la modal del jugador 1 con el duelo contra la computadora
  public duelo2(): void {
    this.dialog.open(ModalJugador1Component, {
      data: 'computadora'
    });

  }

  // Metodo para sali a la pantalla inicial
  public salir(): void{
    this.router.navigate([RouterContrains.INICIO]);
  }

}
