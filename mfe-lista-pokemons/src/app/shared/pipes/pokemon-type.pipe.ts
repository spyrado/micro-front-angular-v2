import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../interfaces';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {
  transform(pokemon: IPokemon, ...args: unknown[]): unknown {
    let pokemonType = pokemon?.types[0]?.type.name;
    return pokemonType ? pokemonType : 'desconhecido';
  }
}
