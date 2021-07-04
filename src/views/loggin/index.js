import React from 'react';

import { Container } from '@material-ui/core';

import Form from 'components/Form';
import Main from '../../components/Main';

import useStyles from './style';

const Loogin = () => {
  const classes = useStyles();
  return (
    <Main>
      <Container
        className={classes.logginContainer}
        style={{ position: 'absolute', height: '100%', top: '0', left: '0' }}
      >
        <Form
          inputs={[
            { label: 'Email', type: 'text' },
            { label: 'Contraseña', type: 'password' }
          ]}
        />
      </Container>
    </Main>
  );
};

export default Loogin;
