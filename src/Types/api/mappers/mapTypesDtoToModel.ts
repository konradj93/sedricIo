import { PokemonTypesDTO, PokemonTypesModel } from '../../model/PokemonTypes';

export const mapTypesDtoToModel = (pokeTypes: PokemonTypesDTO): PokemonTypesModel =>
  pokeTypes.types.edges.map((el) => el.node.type);
