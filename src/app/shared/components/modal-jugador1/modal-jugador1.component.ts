import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';
import { ModalComputadoraComponent } from '../modal-computadora/modal-computadora.component';
import { ModalJugador2Component } from '../modal-jugador2/modal-jugador2.component';

@Component({
  selector: 'app-modal-jugador1',
  templateUrl: './modal-jugador1.component.html',
  styleUrls: ['./modal-jugador1.component.scss']
})
export class ModalJugador1Component implements OnInit {
  public pokemon: ResponsePokemon[] = [];
  public tipos: Type[] = [];
  public isPokemon = false;
  public loading: boolean;
  constructor(
    private buscarPokemonSerice: BuscarPokemonService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  // Metodo para buscar un pokemon dependiendo del parametro que resiva por el input text
  public buscarPokemon(nombre: string): void{
    this.pokemon = [];
    this.loading = true;
    this.isPokemon = false;
    this.buscarPokemonSerice.buscarPokemon(nombre).subscribe((data) => {
      if (data){
        this.loading = false;
        this.isPokemon = false;
        this.pokemon.push(data);
        this.pokemon.map((val) => {
          this.tipos = val.types;
        });
      }else{
        this.pokemon = [];
        this.isPokemon = true;
        this.loading = false;
      }
    }, (err) => {
      this.pokemon = [];
      this.isPokemon = true;
      this.loading = false;
      console.error(err);
    });
  }

  // Metodo para cerrar la modal
  public closeModal(): void{
    this.dialog.closeAll();
  }

  // Metodo para seleccionar un pokemon despues de haberlo buscado y guardar la data en el localstorage
  public seleccionPokemon(pokemon: ResponsePokemon[], jugador1: string ): void{
    const jugador = {
      pokemon,
      jugador1
    };
    localStorage.setItem('jugador1', JSON.stringify(jugador));
    this.dialog.closeAll();
    if (this.data === 'jugador'){
      this.dialog.open(ModalJugador2Component);
    }else{
      this.dialog.open(ModalComputadoraComponent);
    }
  }

}
