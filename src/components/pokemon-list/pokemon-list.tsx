import {
  Component,
  Event,
  EventEmitter,
  Host,
  h,
  Prop,
  Watch,
  State
} from "@stencil/core";
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
  @Prop() data: string;

  @State() pokemon: PokemonListResult;

  @Event() itemEmitter: EventEmitter<PokemonListItem>;

  componentWillLoad() {
    this.parseObject(this.data);
  }

  @Watch("data")
  parseObject(newValue: string) {
    if (newValue) {
      this.pokemon = JSON.parse(newValue);
    }
  }

  onClickButton(item: PokemonListItem) {
    this.itemEmitter.emit(item);
  }

  render() {
    return (
      <Host>
        <div class="pokemon-cards">
          {this.pokemon.results.map(item => {
            return (
              <div class="pokemon-card">
                <div class="pokemon-card-body">
                  <span>{item.name}</span>
                  <button
                    onClick={() => this.onClickButton(item)}
                    class="pokemon-card-button"
                  >
                    >
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
