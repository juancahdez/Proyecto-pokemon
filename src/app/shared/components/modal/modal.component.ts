import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouterContrains } from 'src/app/routers/routers';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
// Metodo para cerrar la modal
  public closeModal(): void{
    this.dialog.closeAll();
  }
  // Metodo para ir a la pagina de play 
  public empezar(): void{
    this.dialog.closeAll();
    this.router.navigate([RouterContrains.PLAY]);
  }
}