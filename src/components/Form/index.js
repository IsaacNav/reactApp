import React, { useCallback } from 'react';

import Button from '@material-ui/core/Button';
import InputBase from 'components/InputBase';

import { useStyles } from './style';

const Form = ({ onSubmit, inputs }) => {
  const classes = useStyles();

  const handleOnsubmit = useCallback(
    (e, v) => {
      console.log({ e, v });
      onSubmit();
    },
    [onSubmit]
  );

  return (
    <div className={classes.root}>
      <form onSubmit={handleOnsubmit}>
        {inputs.map((input, index) => (
          <InputBase key={`loggin_input_${index}`} {...input} />
        ))}
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
