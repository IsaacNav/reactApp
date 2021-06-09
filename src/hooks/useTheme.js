import { useContext } from 'react';
import {
  ThemeContext,
  whiteTheme,
  blackTheme
} from '../providers/ThemeProvider';

const useTheme = () => {
  const { setNewTheme, currentTheme } = useContext(ThemeContext);

  return { setTheme: setNewTheme, whiteTheme, blackTheme, currentTheme };
};

export default useTheme;
