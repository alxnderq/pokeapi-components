import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pokemon-detail',
  styleUrl: 'pokemon-detail.scss',
  shadow: true
})
export class PokemonDetail {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
