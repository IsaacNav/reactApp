import React from 'react';

import { Container, Typography } from '@material-ui/core';
import Main from '../../components/Main';

const Home = () => {
  return (
    <Main>
      <Container>
        <Typography variant="h1" color="primary">
          App Contanier
        </Typography>
      </Container>
    </Main>
  );
};

export default Home;
