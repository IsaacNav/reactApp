import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Switch } from '@material-ui/core';
import useTheme from '../../hooks/useTheme';

const SwitchTheme = ({ onClick }) => {
  const { setTheme, whiteTheme, blackTheme } = useTheme();

  const handleChange = useCallback(
    (e, value) => {
      if (value) {
        setTheme(blackTheme);
        onClick(e, null);
        return;
      }
      setTheme(whiteTheme);
    },
    [setTheme, whiteTheme, blackTheme, onClick]
  );

  return (
    <Switch
      onChange={handleChange}
      name="theme"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  );
};

SwitchTheme.propTypes = {
  onClick: PropTypes.func
};

SwitchTheme.defaultProps = {
  onClick: () => {}
};

export default SwitchTheme;
