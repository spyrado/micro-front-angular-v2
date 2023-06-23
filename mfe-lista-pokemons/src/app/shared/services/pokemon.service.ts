import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { IPokemon, PokemonList } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public getPokemon(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  public getPokemonFullUrl(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  public getPokemons() {
    return this.http
      .get<PokemonList>(`https://pokeapi.co/api/v2/pokemon`)
      .pipe(map((list) => list.results.map((pokemon) => pokemon.url)))
      .pipe(
        switchMap((urls) => {
          const pokemons$ = [];
          for (const url of urls) {
            pokemons$.push(this.getPokemonFullUrl(url));
          }
          return forkJoin(pokemons$);
        })
      );
  }
}
