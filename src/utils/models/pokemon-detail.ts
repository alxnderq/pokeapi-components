import { PokemonSprites } from "./pokemon-sprites";

export interface PokemonDetailResult {
  id: number;
  name: string;
  order: number;
  species: PokemonDetailSpecies;
  sprites: PokemonSprites;
  types: PokemonDetailTypes[];
  weight: number;
}

export interface PokemonDetailTypes {
  slot: number;
  type: PokemonDetailType;
}

export interface PokemonDetailSpecies {
  name: string;
  url: string;
}

export interface PokemonDetailType {
  name: string;
  url: string;
}
