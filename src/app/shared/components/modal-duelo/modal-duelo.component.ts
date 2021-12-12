import { Component, OnInit } from '@angular/core';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { DataDuelo } from 'src/app/interfaces/data-duelo.interface';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';
import { Generation } from 'src/app/interfaces/response-types.interface';

@Component({
  selector: 'app-modal-duelo',
  templateUrl: './modal-duelo.component.html',
  styleUrls: ['./modal-duelo.component.scss']
})
export class ModalDueloComponent implements OnInit {
  public jugador1: DataDuelo;
  public total1 = 0;
  public total2 = 0;
  public jugador1Nombre: string;
  public pokemonJ1: ResponsePokemon[];
  public tiposj1: Type[] = [];
  public jugador2: DataDuelo;
  public computadora: DataDuelo;
  public jugador2Nombre: string;
  public jugadorComputadora: string;
  public pokemonJ2: ResponsePokemon[];
  public pokemonC: ResponsePokemon[];
  public tiposj2: Type[] = [];
  public tiposC: Type[] = [];
  public tipo1: string;
  public tipo2: string;
  // tslint:disable-next-line:variable-name
  public double_damage_from: string;
  // tslint:disable-next-line:variable-name
  public double_damage_from_valor = 0;
  // tslint:disable-next-line:variable-name
  public double_damage_to: string;
  // tslint:disable-next-line:variable-name
  public double_damage_to_valor = 0;
  // tslint:disable-next-line:variable-name
  public half_damage_from: string;
  // tslint:disable-next-line:variable-name
  public half_damage_from_valor = 0;
  // tslint:disable-next-line:variable-name
  public half_damage_to: string;
  // tslint:disable-next-line:variable-name
  public half_damage_to_valor = 0;
  // tslint:disable-next-line:variable-name
  public double_damage_from2: string;
  // tslint:disable-next-line:variable-name
  public double_damage_from2_valor = 0;
  // tslint:disable-next-line:variable-name
  public double_damage_to2: string;
  // tslint:disable-next-line:variable-name
  public double_damage_to2_valor = 0;
  // tslint:disable-next-line:variable-name
  public half_damage_from2: string;
  // tslint:disable-next-line:variable-name
  public half_damage_from2_valor = 0;
  // tslint:disable-next-line:variable-name
  public half_damage_to2: string;
  // tslint:disable-next-line:variable-name
  public half_damage_to2_valor = 0;
  // tslint:disable-next-line:variable-name
  public no_damage_from: string;
  // tslint:disable-next-line:variable-name
  public no_damage_from2: string;
  // tslint:disable-next-line:variable-name
  public no_damage_to: string;
  // tslint:disable-next-line:variable-name
  public no_damage_to2: string;
  constructor(
    private pokemonService: BuscarPokemonService
  ) { }

  ngOnInit(): void {
    this.informacionJugador1();
    this.informacionJugador2();
    this.informacionComputadora();
  }
  // Metodo para traer la data del localStorage del jugador 1 y mostrar data en el HTML
  public informacionJugador1(): void{
    this.jugador1 = JSON.parse(localStorage.getItem('jugador1'));
    this.jugador1Nombre = this.jugador1.jugador1;
    this.pokemonJ1 = this.jugador1.pokemon;
    this.pokemonJ1.map((val) => {
      this.tiposj1 = val.types;
    });
  }
    // Metodo para traer la data del localStorage del jugador 2 y mostrar data en el HTML
  public informacionJugador2(): void{
    this.jugador2 = JSON.parse(localStorage.getItem('jugador2'));
    if (this.jugador2){
      this.jugador2Nombre = this.jugador2.jugador2;
      this.pokemonJ2 = this.jugador2.pokemon;
      this.pokemonJ2.map((val) => {
        this.tiposj2 = val.types;
      });
    }else{
      this.informacionComputadora();
    }
  }
      // Metodo para traer la data del localStorage de la computadora y mostrar data en el HTML
  public informacionComputadora(): void{
    this.computadora = JSON.parse(localStorage.getItem('Computadora'));
    this.jugadorComputadora = this.computadora.jugador;
    this.pokemonC = this.computadora.pokemon;
    this.pokemonC.map((val) => {
      this.tiposC = val.types;
    });
  }

  // Metodo para realizar el enfrentamiento entre los jugadores y la computadora segun los tipos de pokemon
  public luchar(pokem1: ResponsePokemon[], pokem2: ResponsePokemon[] , pokemC: ResponsePokemon[]): void{
    pokem1.map((val) => {
      val.types.map((type) => {
          this.typesP1(type.type.name);
          this.tipo1 = type.type.name;
      });
    });
    console.log('VERY IMPROT', pokem2, pokemC);
    if (pokem2 !== undefined){
      pokem2.map((val) => {
        val.types.map((type) => {
            this.typesP2(type.type.name);
            this.tipo2 = type.type.name;
        });
      });
    }
    if (pokemC !== undefined){
      pokemC.map((val) => {
        val.types.map((type) => {
            this.typesP2(type.type.name);
            this.tipo2 = type.type.name;
        });
      });
    }
  }
// Metodo para saber los puntajes de los tipos de Pokemon del jugador 1
  public typesP1(tipo1: string): void{
    this.pokemonService.tipoPokemon(tipo1).subscribe((type) => {
      type.double_damage_from.map((double: Generation) => {
        if (double.name === this.tipo2){
          this.double_damage_from = `-70 PTS double_damage_from ${this.tipo2}`;
          this.double_damage_from_valor = -70;
        }
      });
      type.double_damage_to.map((double) => {
        if (double.name === this.tipo2){
          this.double_damage_to = `+70 PTS double_damage_to ${this.tipo2}`;
          this.double_damage_to_valor = 70;
        }
      });
      type.half_damage_from.map((double) => {
        if (double.name === this.tipo2){
          this.half_damage_from = `-30 PTS half_damage_from ${this.tipo2}`;
          this.half_damage_from_valor = -30;
        }
      });
      type.half_damage_to.map((double) => {
        if (double.name === this.tipo2){
          this.half_damage_to = `+30 PTS half_damage_to ${this.tipo2}`;
          this.half_damage_to_valor = 30;
        }
      });
      type.no_damage_from.map((double) => {
        if (double.name === this.tipo2){
          this.no_damage_from = `0 PTS half_damage_to ${this.tipo2}`;
        }
      });
      type.no_damage_to.map((double) => {
        if (double.name === this.tipo2){
          this.no_damage_to = `0 PTS half_damage_to ${this.tipo2}`;
        }
      });
      // tslint:disable-next-line:max-line-length
      this.total1 = (this.double_damage_from_valor) + (this.double_damage_to_valor) + (this.half_damage_from_valor) + (this.half_damage_to_valor);
    });
  }
  // Metodo para saber los puntajes de los tipos de Pokemon del jugador 2 o computadora
  public typesP2(tipo2: string): void{
    this.pokemonService.tipoPokemon(tipo2).subscribe((type) => {
      type.double_damage_from.map((double) => {
        if (double.name === this.tipo1){
          this.double_damage_from2 = `-70 PTS double_damage_from ${this.tipo1}`;
          this.double_damage_from2_valor = -70;
        }
      });
      type.double_damage_to.map((double) => {
        if (double.name === this.tipo1){
          this.double_damage_to2 = `+70 PTS double_damage_to ${this.tipo1}`;
          this.double_damage_to2_valor = 70;
        }
      });
      type.half_damage_from.map((double) => {
        if (double.name === this.tipo1){
          this.half_damage_from2 = `-30 PTS half_damage_from ${this.tipo1}`;
          this.half_damage_from2_valor = -30;
        }
      });
      type.half_damage_to.map((double) => {
        if (double.name === this.tipo1){
          this.half_damage_to2 = `+30 PTS half_damage_to ${this.tipo1}`;
          this.half_damage_to2_valor = 30;
        }
      });
      type.no_damage_from.map((double) => {
        if (double.name === this.tipo1){
          this.no_damage_from2 = `0 PTS half_damage_to ${this.tipo1}`;
        }
      });
      type.no_damage_to.map((double) => {
        if (double.name === this.tipo1){
          this.no_damage_to2 = `0 PTS half_damage_to ${this.tipo1}`;
        }
      });
      // tslint:disable-next-line:max-line-length
      this.total2 = (this.double_damage_from2_valor) + (this.double_damage_to2_valor) + (this.half_damage_from2_valor) + (this.half_damage_to2_valor);
      this.ganador();
    });
  }
  // Metodo para saber quien fue el ganador en el enfrentamiento
  public ganador(): void{
    if (this.pokemonJ2 !== undefined){
      if (this.total1 > this.total2){
        this.pokemonJ1.map((val) => {
          alert(`El ganador es ${val.name}`);
        });
      }else if (this.total1 === this.total2){
        alert(`Empate`);
      }
      else{
        this.pokemonJ2.map((val) => {
          alert(`El ganador es ${val.name}`);
        });
      }
    }
    if (this.pokemonC !== undefined){
      if (this.total1 > this.total2){
        this.pokemonJ1.map((val) => {
          alert(`El ganador es ${val.name}`);
        });
      }else if (this.total1 === this.total2){
        alert(`Empate`);
      }
      else{
        this.pokemonC.map((val) => {
          alert(`El ganador es ${val.name}`);
        });
      }
    }
  }





}


