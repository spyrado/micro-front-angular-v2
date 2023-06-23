import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PokeCardModule } from 'src/app/shared/components/poke-card/poke-card.module';
import { ListaPokemonsRoutingModule } from './lista-pokemons-routing.module';
import { ListaPokemonsComponent } from './lista-pokemons.component';

@NgModule({
  declarations: [ListaPokemonsComponent],
  imports: [CommonModule, ListaPokemonsRoutingModule, PokeCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListaPokemonsModule {}
