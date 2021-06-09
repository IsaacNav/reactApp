import { makeStyles } from '@material-ui/core/styles';
export const hederBarHeight = '80px';
export const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'fixed',
      background: 'transparent',
      width: '100%',
      height: hederBarHeight,
      top: '0px',
      left: '0px',
      // border: '1px solid red',
      '& > *': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        '& > div': {
          // border: '1px solid blue',
          flex: 1,
          height: hederBarHeight
        }
      }
    }
  };
});
