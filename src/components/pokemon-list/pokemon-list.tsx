import { Component, Host, h, State } from "@stencil/core";
import {
  PokemonListResult,
  PokemonListItem
} from "../../utils/models/pokemon-list";

@Component({
  tag: "pokemon-list",
  styleUrl: "pokemon-list.scss",
  shadow: true
})
export class PokemonList {
  readonly API: string;
  readonly POKEMON_LIST: string = "pokemon";

  @State() result: PokemonListResult;
  @State() pokemons: PokemonListItem[];

  constructor() {
    this.API = "https://pokeapi.co/api/v2";
    this.POKEMON_LIST = "/pokemon/";
  }

  componentWillLoad() {
    this.getPokemonList();
  }

  async getPokemonList() {
    const url = `${this.API}${this.POKEMON_LIST}`;
    const response: Response = await fetch(url);
    const data: PokemonListResult = await response.json();
    this.result = data;
    this.pokemons = data.results;
  }

  render() {
    return (
      <Host>
        <div class="pokemon-cards">
          {this.pokemons.map(item => {
            return (
              <div class="pokemon-card">
                <div class="pokemon-card-body">
                  <pokemon-detail data={item}></pokemon-detail>
                </div>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
