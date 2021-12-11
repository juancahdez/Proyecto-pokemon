import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';
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
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

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

  public closeModal(): void{
    this.dialog.closeAll();
  }


  public seleccionPokemon(pokemon: ResponsePokemon[], jugador1: string ): void{
    const jugador = {
      pokemon,
      jugador1
    };
    localStorage.setItem('jugador1', JSON.stringify(jugador));
    this.dialog.closeAll();
    this.dialog.open(ModalJugador2Component);
  }

}
