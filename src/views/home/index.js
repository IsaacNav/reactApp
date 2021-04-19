import React, { useCallback } from 'react';

import { Container, Typography } from '@material-ui/core';

import useTheme from '../../hooks/useTheme';
import useStyles from './style';

const Home = () => {
  const [theme, setTheme] = useTheme();
  const classes = useStyles();

  const handleOnClick = useCallback(() => {
    const currentTheme = theme;
    currentTheme.palette.primary.main = '#ffff';
    currentTheme.palette.secondary.main = '#0000';

    setTheme({ ...currentTheme });
  }, [theme, setTheme]);

  return (
    <Container className={classes.root}>
      <Typography variant="h1">App Contanier</Typography>
      <button onClick={handleOnClick}>Cambar tema</button>
    </Container>
  );
};

export default Home;
