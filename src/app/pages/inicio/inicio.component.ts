import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public closePokebola = false;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  // Metodo para abrir la pokebola y que salga la modal de Bienvenida
  public openPokebola(): void{
    this.closePokebola = !this.closePokebola;
    if (this.closePokebola){
      this.dialog.open(ModalComponent);
    }else{
      this.dialog.closeAll();
      this.closePokebola = false;
    }
  }




}