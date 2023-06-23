import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { MfeListaPokemonsComponent } from './mfe-lista-pokemons/mfe-lista-pokemons.component';
import { PokemonTypePipe } from './shared/pipes/pokemon-type.pipe';

@NgModule({
  declarations: [MfeListaPokemonsComponent, PokemonTypePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MfeListaPokemonsComponent, {
      injector: this.injector,
    });
    customElements.define('mfe-lista-pokemons', el);
  }
}
/**
 * to run this micro front local, follow these steps
 * 1º run "npm run build:watch:prod" OR "npm run build:watch:dev" if you need to debug.
 * 2º go to folder "dist/mfe-lista-pokemons" and run the command static-server ( you need to install globaly if you dont have, to install globaly "npm i -g static-server" )
 * 3º open in google chrome the link: http://localhost:9080/
 * 4º That's it ma frend ;)
 *
 * http-server --path dist/mfe-lista-pokemons
 */
// ng build --configuration=production --output-hashing=none --single-bundle=true
// go into dist/mfe-lista-pokemons and run static-server
