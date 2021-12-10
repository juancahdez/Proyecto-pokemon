import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarPokemonService {

  public api = environment.API;
  constructor(private http: HttpClient) { }

  public buscarPokemon(nombre: string): Observable<ResponsePokemon>{
    return this.http.get<ResponsePokemon>(`${this.api}pokemon/${nombre}`);
  }

  public tipoPokemon(type: string): Observable<DamageRelations>{
    return this.http.get<ResponseTypes>(`${this.api}type/${type}`).pipe
    (map(val => {
      return val.damage_relations;
    }));
  }
}
