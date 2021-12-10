import { ResponsePokemon } from './response-pokemon.interface';

export interface DataDuelo{
    jugador1?: string;
    jugador2?: string;
    pokemon: ResponsePokemon[];
}