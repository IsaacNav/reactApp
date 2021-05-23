import { makeStyles } from '@material-ui/core/styles';

import { hederBarHeight } from '../HeaderBar/style';

export default makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      padding: 0,
      backgroundColor: theme.backgroundColor,
      width: '100%',
      height: '100vh'
    },
    whiteSpace: {
      width: '100%',
      height: hederBarHeight
    }
  };
});
