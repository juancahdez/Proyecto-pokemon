import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';
import { ModalDueloComponent } from '../modal-duelo/modal-duelo.component';

@Component({
  selector: 'app-modal-computadora',
  templateUrl: './modal-computadora.component.html',
  styleUrls: ['./modal-computadora.component.scss']
})
export class ModalComputadoraComponent implements OnInit {

  public pokemon: ResponsePokemon[] = [];
  public tipos: Type[] = [];
  public isPokemon = false;
  public loading: boolean;
  constructor(
    private buscarPokemonSerice: BuscarPokemonService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }



  public closeModal(): void{
    this.dialog.closeAll();
  }


  public seleccionPokemon(): void{
    const id = Math.random() * (500 - 1) + 1;
    // tslint:disable-next-line:radix
    const idNumer = parseInt(id.toFixed(0));
    this.buscarPokemon(idNumer);
  }

  public buscarPokemon(id: number): void {
    this.pokemon = [];
    this.loading = true;
    this.isPokemon = false;
    this.buscarPokemonSerice.buscarPokemon(id).subscribe((data) => {
      if (data){
        this.loading = false;
        this.isPokemon = false;
        this.pokemon.push(data);
        this.pokemon.map((val) => {
          this.tipos = val.types;
        });
        const jugador = {
          pokemon: this.pokemon,
          jugador: 'Computadora'
        };
        localStorage.removeItem('jugador2');
        localStorage.setItem('Computadora', JSON.stringify(jugador));
        this.dialog.closeAll();
        this.dialog.open(ModalDueloComponent);
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

}
