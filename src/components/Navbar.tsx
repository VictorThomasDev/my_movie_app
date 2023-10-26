import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleAppBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const handleclickHome = () => {
    navigate('/')
  }
  const handleclickSearch = () => {
    navigate('/SearchPage')
  }

  return (
    <>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <Typography>
            My movie app
          </Typography>
          <Grid marginLeft={10}>
            <Button color="inherit" onClick={handleclickHome}>Home
            </Button>
            <Button color="inherit" onClick={handleclickSearch}>Search
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default SimpleAppBar;
