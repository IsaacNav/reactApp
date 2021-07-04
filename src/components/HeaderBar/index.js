import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { InvertColors as InvertColorsIcon } from '@material-ui/icons';

import SwitchTheme from 'components/SwitchTheme';

import { useStyles } from './style';

const HeaderBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Container>
          <div>
            <div className={classes.logo}>
              <Typography variant="h6" color="primary">
                App music
              </Typography>
            </div>
          </div>
          <div data-testid="themeSwitch">
            <div className={classes.themeColorSwitch}>
              <SwitchTheme />
              <InvertColorsIcon color="primary" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderBar;
