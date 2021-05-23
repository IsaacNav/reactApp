import React, { usestate } from 'react';

import HeaderBar from '../HeaderBar';
import useStyles from './style';

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderBar />
      <div className={classes.whiteSpace}></div>
      {children}
    </div>
  );
};

export default Main;
