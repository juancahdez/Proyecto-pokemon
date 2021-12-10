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
  public duelo1(): void {
    this.dialog.open(ModalJugador1Component);
  }
  public duelo2(): void {
  }

  public salir(): void{
    this.router.navigate([RouterContrains.INICIO]);
  }

}