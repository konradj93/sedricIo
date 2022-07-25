import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export interface CommonSidebarElementProps {
  type: string;
}
const CommonSidebarElement = ({ type }: CommonSidebarElementProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate(type)}>
      <ListItemText primary={type} />
    </ListItemButton>
  );
};

export default CommonSidebarElement;
