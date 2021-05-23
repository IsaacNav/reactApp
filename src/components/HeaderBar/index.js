import React from 'react';

import { Container } from '@material-ui/core';
import SwitchTheme from '../../components/SwitchTheme';

import { useStyles } from './style';

const HeaderBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div></div>
        <div data-testid="themeSwitch">
          <SwitchTheme />
        </div>
      </Container>
    </div>
  );
};

export default HeaderBar;
