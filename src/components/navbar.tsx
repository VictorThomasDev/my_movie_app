import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleAppBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/')
  }

  return (
    <>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <Typography>
            My movie app
          </Typography>
          <Grid marginLeft={10}>
            <button color="inherit" onClick={() => { handleclick }}>A
            </button>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default SimpleAppBar;
