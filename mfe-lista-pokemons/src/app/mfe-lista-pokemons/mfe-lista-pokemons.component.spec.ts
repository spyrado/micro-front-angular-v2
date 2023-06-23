import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeListaPokemonsComponent } from './mfe-lista-pokemons.component';

describe('MfeListaPokemonsComponent', () => {
  let component: MfeListaPokemonsComponent;
  let fixture: ComponentFixture<MfeListaPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfeListaPokemonsComponent]
    });
    fixture = TestBed.createComponent(MfeListaPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
