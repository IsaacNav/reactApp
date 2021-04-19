import { useState, useCallback } from 'react';
import { theme } from '../context/ThemeContext';

const useTheme = () => {
  const [appTheme, setAppTheme] = useState(theme);

  const setTheme = useCallback((newTheme) => {
    console.log(newTheme);
    if (newTheme instanceof Object) {
      setAppTheme(newTheme);
      const stringifyTheme = JSON.stringify(newTheme);
      window.localStorage.setItem('theme', stringifyTheme);
    }
    return null;
  });

  return [appTheme, setTheme];
};

export default useTheme;
