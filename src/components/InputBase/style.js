import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  // const shadow =
  //   theme.backgroundColor === theme.colorPalette.black
  //     ? theme.palette.primary.main
  //     : theme.colorPalette.pink;
  return {
    root: {
      position: 'relative',
      width: '100%',
      maxWidth: '300px',
      padding: '10px 5px',
      height: 'auto'
    },
    inputWraper: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      backgroundColor: 'transparent',
      '& *, *::before, *::after': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      },
      '& > *': {
        minWidth: '250px'
      },
      '& p[class^="MuiFormHelperText"]': {
        fontSize: '0.70rem',
        lineHeight: '0.80rem'
      }
    }
  };
});
