import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPokemonsComponent } from './lista-pokemons.component';

const routes: Routes = [{ path: '', component: ListaPokemonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPokemonsRoutingModule { }
