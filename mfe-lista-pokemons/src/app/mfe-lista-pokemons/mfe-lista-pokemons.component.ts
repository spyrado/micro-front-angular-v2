import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../shared/interfaces';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-mfe-lista-pokemons',
  templateUrl: './mfe-lista-pokemons.component.html',
  styleUrls: ['./mfe-lista-pokemons.component.scss'],
  providers: [PokemonService],
})
export class MfeListaPokemonsComponent implements OnInit {
  pokemon?: IPokemon;
  pokemons$?: Observable<IPokemon[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
    this.pokemonService.getPokemon('pikachu').subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  public getPokemonList(): void {
    this.pokemons$ = this.pokemonService.getPokemons();
  }

  onAdicionarAoTopo(pokemon: IPokemon) {
    const data = {
      pokemon,
    };
    const event = new CustomEvent('adicionaPokemonAoTopoDaTela', {
      detail: data,
    });
    window.dispatchEvent(event);
  }
}
