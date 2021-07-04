import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './style.js';

const SearchBar = ({ onChange, ...rest }) => {
  console.log(useStyles);
  const classes = useStyles();

  const handleOnChange = (event) => {
    const {
      target: { value: textValue }
    } = event;
    onChange(event, textValue);
  };

  return (
    <div className={classes.root}>
      <TextField {...rest} onChange={handleOnChange} />
    </div>
  );
};

export default SearchBar;
