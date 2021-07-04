import React from 'react';

import { Container } from '@material-ui/core';
import HeaderBar from '../HeaderBar';
import useStyles from './style';

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.main}>
          <HeaderBar />
          <div className={classes.whiteSpace}></div>
          {children}
          <footer className={classes.footer}>
            <Container>
              <div></div>
            </Container>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
