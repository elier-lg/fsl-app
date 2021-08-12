import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));