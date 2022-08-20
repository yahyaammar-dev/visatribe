import { makeStyles } from '@mui/styles';
import { theme } from '../../theme';

export const LandingPageStyles = makeStyles({
  main_container: {
    background: "url('./imgs/body.png') no-repeat",
    backgroundAttachment: 'fixed',
    width: '100%',
  },
  review_sec: {
    background: theme.palette.primary.main,
  },
  light: {
    background: theme.palette.ternary.light,
  },
  copyright: {
    background: theme.palette.primary.copyright,
  },
});
