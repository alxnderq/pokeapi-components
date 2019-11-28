import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pokemon-list',
  styleUrl: 'pokemon-list.scss',
  shadow: true
})
export class PokemonList {

  render() {
    return (
      <Host>
        <slot>Hi PokemonList Component</slot>
      </Host>
    );
  }

}
