import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponsePokemon } from 'src/app/interfaces/response-pokemon.interface';
import { DamageRelations, ResponseTypes } from 'src/app/interfaces/response-types.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarPokemonService {

  public api = environment.API;
  constructor(private http: HttpClient) { }

  // metodo para buscar un pokemon de la api https://pokeapi.co/api/v2/pokemon
  public buscarPokemon(nombre: string | number): Observable<ResponsePokemon>{
    return this.http.get<ResponsePokemon>(`${this.api}pokemon/${nombre}`);
  }
  // metodo para buscar un Tipo de pokemon de la api https://pokeapi.co/api/v2/type
  public tipoPokemon(type: string): Observable<DamageRelations>{
    return this.http.get<ResponseTypes>(`${this.api}type/${type}`).pipe
    (map(val => {
      return val.damage_relations;
    }));
  }
}
