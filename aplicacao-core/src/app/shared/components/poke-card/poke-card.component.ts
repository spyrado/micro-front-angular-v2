import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../interfaces';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  
  @Input() pokemon?: IPokemon;
  @Output() pokemonChange = new EventEmitter<IPokemon | undefined>();

  removePokemon() {
    this.pokemon = undefined; 
    this.pokemonChange.emit(this.pokemon);
  }
}
