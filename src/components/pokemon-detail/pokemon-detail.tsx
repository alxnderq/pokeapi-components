import { Component, Host, h, Prop, State } from "@stencil/core";
import { PokemonListItem } from "../../utils/models/pokemon-list";
import { PokemonDetailResult } from "../../utils/models/pokemon-detail";

@Component({
  tag: "pokemon-detail",
  styleUrl: "pokemon-detail.scss",
  shadow: true
})
export class PokemonDetail {
  @Prop() data: PokemonListItem;

  @State() pokemon: PokemonDetailResult;

  readonly POKEMON_IMAGE_URL: string;

  constructor() {
    this.POKEMON_IMAGE_URL = "https://pokeres.bastionbot.org/images/pokemon/";
  }

  componentWillLoad() {
    this.getPokemonDetail();
  }

  async getPokemonDetail() {
    const response: Response = await fetch(this.data.url);
    const data: PokemonDetailResult = await response.json();
    this.pokemon = data;
  }

  render() {
    const image: string = `${this.POKEMON_IMAGE_URL}${this.pokemon.id}.png`;
    return (
      <Host>
        <div class="pokemon-container">
          <img class="pokemon-image" src={image} alt="Pokemon Image" />
          <div class="pokemon-body">
            <strong>{this.pokemon.name}</strong>
          </div>
        </div>
      </Host>
    );
  }
}
