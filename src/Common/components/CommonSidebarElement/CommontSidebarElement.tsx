import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, generatePath } from 'react-router-dom';
import { POKEMON_TYPES_ROUTES } from '../../../Types/routes/routes';

export interface CommonSidebarElementProps {
  type: string;
}
const CommonSidebarElement = ({ type }: CommonSidebarElementProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ListItemButton
      onClick={() => navigate(generatePath(POKEMON_TYPES_ROUTES.list, { pokeType: type }))}>
      <ListItemText primary={type} />
    </ListItemButton>
  );
};

export default CommonSidebarElement;
