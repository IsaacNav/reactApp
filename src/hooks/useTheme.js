import { useContext } from 'react';
import {
  ThemeContext,
  whiteTheme,
  blackTheme
} from '../providers/ThemeProvider';

const useTheme = () => {
  const { setNewTheme } = useContext(ThemeContext);

  return { setTheme: setNewTheme, whiteTheme, blackTheme };
};

export default useTheme;
