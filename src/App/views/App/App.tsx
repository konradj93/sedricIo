import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { POKEMON_TYPES_ROUTES } from '../../../Types/routes/routes';
import PokemonListView from '../../../Types/views/PokemonListView/PokemonListView';
import { APP_ROUTES } from '../../routes/routes';
import DashboardView from '../Dashboard/Dashboard';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={APP_ROUTES.dashboard} element={<DashboardView />} />
      <Route path={POKEMON_TYPES_ROUTES.list} element={<PokemonListView />} />
    </Routes>
  );
};

export default App;
