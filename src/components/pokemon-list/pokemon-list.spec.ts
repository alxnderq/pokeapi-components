import { PokemonList } from './pokemon-list';

describe('pokemon-list', () => {
  it('builds', () => {
    expect(new PokemonList()).toBeTruthy();
  });
});
