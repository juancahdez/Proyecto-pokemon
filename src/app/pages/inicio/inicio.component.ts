import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  public openPokebola(modal: any): void{
    this.closePokebola = !this.closePokebola;
    if (this.closePokebola){
      this.dialog.open(modal);
    }else{
      this.dialog.closeAll();
    }
  }

  public cerrarModal(): void{
    this.dialog.closeAll();
    this.closePokebola = false;
  }

}
