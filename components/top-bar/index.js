import React, { useState } from "react"
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles'

export const TopBar = ({ open, onHandleDrawer }) => {
  const classes = useStyles();

  return <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={onHandleDrawer}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
}
