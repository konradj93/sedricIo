export interface PokemonDTO {
  node: {
    type: string;
    __typename: string;
  };
  __typename: string;
}
export interface PokemonTypesDTO {
  types: {
    edges: PokemonDTO[];
  };
}

export type PokemonTypesModel = string[];
