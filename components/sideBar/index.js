import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import { useStyles } from './styles';
import Image from 'next/image'
import { Divider } from '@material-ui/core';
import { useRouter } from "next/router";

export const SideBar = ({open, onHandleDrawer}) => {
  const classes = useStyles();
  const router = useRouter();

  const isPageSelected = (url) => {
    return router.pathname.split("/")[1] === url.split("/")[1];
  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Image src='/logo.svg' height='84px' width='175px'/>
        <IconButton onClick={onHandleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider/>
      <List>{mainListItems(isPageSelected)}</List>
    </Drawer>
  );
}
