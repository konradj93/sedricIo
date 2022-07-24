import { Toolbar, IconButton, Typography } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { CommonTopBarStyled } from './CommonTopBar.styles';

export interface CommonTopBarStylesProps {
  open?: boolean;
  drawerWidth: number;
}
export interface CommonTopBarProps extends MuiAppBarProps, CommonTopBarStylesProps {
  toggleDrawer?: () => void;
  title: string;
}

const CommonTopBar = ({
  open,
  drawerWidth,
  toggleDrawer,
  title
}: CommonTopBarProps): JSX.Element => {
  return (
    <CommonTopBarStyled position="absolute" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          pr: '24px' // keep right padding when drawer closed
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </CommonTopBarStyled>
  );
};

export default CommonTopBar;
