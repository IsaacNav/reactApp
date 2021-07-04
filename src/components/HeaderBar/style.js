import { makeStyles } from '@material-ui/core/styles';

export const hederBarHeight = '80px';

export const useStyles = makeStyles((theme) => {
  const logoColor =
    theme.backgroundColor === theme.colorPalette.black
      ? theme.colorPalette.green
      : theme.colorPalette.pink;

  return {
    root: {
      position: 'absolute',
      background: 'transparent',
      width: '100%',
      height: hederBarHeight,
      top: '0px',
      left: '0px',
      '& > div': {
        maxWidth: '650px',
        margin: 'auto',
        '& > *': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          '& > div': {
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            flex: 1,
            display: 'flex',
            height: hederBarHeight
          },
          '& > div:first-child': {
            justifyContent: 'flex-start'
          },
          '& > div:last-child': {
            justifyContent: 'flex-end'
          }
        }
      }
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& * ': {
        color: logoColor,
        fontWeight: 'bold'
      }
    },
    themeColorSwitch: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      transform: 'scale(0.9)'
    }
  };
});
