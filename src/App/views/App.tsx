import React from 'react';
import CommonLayout from '../../Common/view/CommonLayout/CommonLayout';
import useFetchPokeTypes from '../../Types/hooks/useFetchPokeTypes';

const App = (): JSX.Element => {
  const { loading, pokeTypes } = useFetchPokeTypes();
  console.log(pokeTypes, loading);
  return (
    <CommonLayout pageTitle="Dashboard">
      <h1>Hello Sedrick</h1>
    </CommonLayout>
  );
};

export default App;
