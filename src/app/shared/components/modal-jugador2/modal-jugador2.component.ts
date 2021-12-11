import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';
import { ModalDueloComponent } from '../modal-duelo/modal-duelo.component';

@Component({
  selector: 'app-modal-jugador2',
  templateUrl: './modal-jugador2.component.html',
  styleUrls: ['./modal-jugador2.component.scss']
})
export class ModalJugador2Component implements OnInit {
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


  public seleccionPokemon(pokemon: ResponsePokemon[], jugador2: string ): void{
    const jugador = {
      pokemon,
      jugador2
    };
    localStorage.setItem('jugador2', JSON.stringify(jugador));
    this.dialog.closeAll();
    this.dialog.open(ModalDueloComponent);
  }

}
