import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import styles from './styles.module.scss'
import { useStyles } from './useStyles'

export default function Employees() {
  const classes = useStyles();
  return <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        Employee datatable
      </Paper>
    </Grid>
  </Grid>
}
