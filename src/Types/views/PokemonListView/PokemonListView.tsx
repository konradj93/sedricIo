import { useParams } from 'react-router-dom';
import CommonLayout from '../../../Common/view/CommonLayout/CommonLayout';
import useFetchPokemonListByType from '../../hooks/useFetchPokemonListByType';

const PokemonListView = (): JSX.Element => {
  const { pokeType } = useParams() as { pokeType: string };
  useFetchPokemonListByType(pokeType);
  return (
    <CommonLayout pageTitle={`${pokeType} pokemon list`}>
      <h1>List</h1>
    </CommonLayout>
  );
};

export default PokemonListView;
