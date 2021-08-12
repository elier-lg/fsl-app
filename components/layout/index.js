import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import { SideBar } from '../sidebar'
import { TopBar } from '../top-bar'
import { useStyles } from './styles'
import { useState} from 'react'


export const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar open={open} onHandleDrawer={handleDrawerOpen} />
      <SideBar open={open} onHandleDrawer={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  )
}
