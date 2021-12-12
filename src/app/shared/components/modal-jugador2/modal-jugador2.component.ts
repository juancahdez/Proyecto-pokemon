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
  public seleccionPokemon(pokemon: ResponsePokemon[], jugador2: string ): void{
    const jugador = {
      pokemon,
      jugador2
    };
    localStorage.setItem('jugador2', JSON.stringify(jugador));
    localStorage.removeItem('Computadora');
    this.dialog.closeAll();
    this.dialog.open(ModalDueloComponent);
  }

}
