import { IPokemonSprites, IPokemonTypes } from '.';

export interface IPokemon {
  id: number;
  name: string;
  weight: number;
  sprites: IPokemonSprites;
  types: IPokemonTypes[];
}
