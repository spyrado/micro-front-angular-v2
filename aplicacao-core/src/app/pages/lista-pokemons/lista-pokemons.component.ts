import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.scss'],
})
export class ListaPokemonsComponent implements OnInit {
  public pokemon?: IPokemon;

  constructor() {}

  ngOnInit(): void {
    this.listenForPokemonEvents();
  }

  listenForPokemonEvents() {
    window.addEventListener(
      'adicionaPokemonAoTopoDaTela',
      this.adicionaPokemonAoTopoDaTela.bind(this),
      true
    );
  }

  adicionaPokemonAoTopoDaTela($event: any) {
    let customEvent = $event as CustomEvent;
    const pokemon = customEvent.detail.pokemon;
    console.log('POKEMON: ', pokemon);
    this.pokemon = pokemon;
  }

  destroyPokemonEventListener() {
    window.removeEventListener(
      'adicionaPokemonAoTopoDaTela',
      this.adicionaPokemonAoTopoDaTela.bind(this),
      true
    );
  }

  ngOnDestroy(): void {
    this.destroyPokemonEventListener();
  }
}
