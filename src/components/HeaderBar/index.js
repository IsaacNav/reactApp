import React from 'react';

import { Container } from '@material-ui/core';
import { InvertColors as InvertColorsIcon } from '@material-ui/icons';
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
          <InvertColorsIcon color="primary" />
        </div>
      </Container>
    </div>
  );
};

export default HeaderBar;
