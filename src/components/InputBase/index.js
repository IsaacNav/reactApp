import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './style.js';

const InputBase = ({ onChange, ...rest }) => {
  console.log(useStyles);
  const classes = useStyles();

  const handleOnChange = useCallback(
    (event) => {
      const {
        target: { value: textValue }
      } = event;
      console.log({ value: textValue });
      onChange(textValue);
    },
    [onChange]
  );

  return (
    <div className={classes.root}>
      <div className={classes.inputWraper}>
        <TextField
          {...rest}
          onChange={handleOnChange}
          color="primary"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default InputBase;
