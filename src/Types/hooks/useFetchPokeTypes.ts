import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { mapTypesDtoToModel } from '../api/mappers/mapTypesDtoToModel';
import { LIST_TYPES } from '../api/queries/listTypes';
import { PokemonTypesDTO, PokemonTypesModel } from '../model/PokemonTypes';

const useFetchPokeTypes = () => {
  const [pokeTypes, setPokeTypes] = useState<PokemonTypesModel>();
  const { loading, data } = useQuery<PokemonTypesDTO>(LIST_TYPES);
  useEffect(() => {
    if (data) setPokeTypes(mapTypesDtoToModel(data));
  }, [data]);
  return {
    loading,
    pokeTypes
  };
};

export default useFetchPokeTypes;
