import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CommonTopBar from '../../components/CommonTopBar/CommonTopBar';
import CommonSidebar from '../../components/CommonSidebar/CommonSidebar';
import { drawerWidth } from '../../const/sidebar';

const mdTheme = createTheme();

const CommonLayout = ({
  children,
  pageTitle
}: {
  children: React.ReactElement;
  pageTitle: string;
}): JSX.Element => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CommonTopBar
          open={open}
          toggleDrawer={toggleDrawer}
          title={pageTitle}
          drawerWidth={drawerWidth}
        />
        <CommonSidebar drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {children}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CommonLayout;
