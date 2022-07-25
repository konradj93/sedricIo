import MuiAppBar from '@mui/material/AppBar';
import { CommonTopBarStylesProps } from './CommonTopBar';
import { styled } from '@mui/material/styles';

export const CommonTopBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<CommonTopBarStylesProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
