import { Component, Host, h, Prop, State, Watch } from "@stencil/core";
import { PokemonDetailResult } from "../../utils/models/pokemon-detail";

@Component({
  tag: "pokemon-detail",
  styleUrl: "pokemon-detail.scss",
  shadow: true
})
export class PokemonDetail {
  @Prop() data: string;

  @State() pokemon: PokemonDetailResult;

  componentWillLoad() {
    this.parseObject(this.data);
  }

  @Watch("data")
  parseObject(newValue: string) {
    if (newValue) {
      this.pokemon = JSON.parse(newValue);
    }
  }

  render() {
    return (
      <Host>
        <div class="pokemon-detail-container">
          <img
            class="pokemon-image"
            src={this.pokemon.sprites.front_default}
            alt="Pokemon Image"
          />
          <div class="pokemon-body">
            <strong>{this.pokemon.name}</strong>
          </div>
        </div>
      </Host>
    );
  }
}
