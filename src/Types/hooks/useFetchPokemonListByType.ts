import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { LIST_POKEMONS } from '../api/queries/getPokemons';
import { PokemonTypesDTO } from '../model/PokemonTypes';

const useFetchPokemonListByType = (pokeType: string) => {
  const { loading, data } = useQuery<PokemonTypesDTO>(LIST_POKEMONS, {
    variables: {
      first: 15,
      type: pokeType
    }
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return {
    loading
  };
};

export default useFetchPokemonListByType;
