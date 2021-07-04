import { makeStyles } from '@material-ui/core/styles';

import { hederBarHeight } from '../HeaderBar/style';

export default makeStyles((theme) => {
  const shadow = theme.backgroundColor === '#212121' ? '0.8' : '0.3';
  return {
    root: {
      position: 'relative',
      width: '100%',
      margin: 'auto',
      height: '100vh',
      backgroundColor: theme.backgroundColor
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      justifyContent: 'center'
    },
    main: {
      maxWidth: '650px',
      margin: 'auto',
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: `0px 5px 15px rgba(0,0,0,${shadow})`
    },
    whiteSpace: {
      width: '100%',
      height: hederBarHeight
    },
    footer: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: '30px',
      '& > * > div': {
        borderTop: `1px solid ${theme.palette.primary.main}`
      }
    }
  };
});
