export interface PokemonListResult {
  count: number;
  previous: string;
  next: string;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}
