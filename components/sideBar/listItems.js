import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Link from 'next/link';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


export const mainListItems = (isSelected) => {
  return (
    <div>
      <Link href="/">
        <ListItem button selected={isSelected("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link href="/employees">
        <ListItem button selected={isSelected("/employees")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
      </Link>
      <Link href="/clients">
        <ListItem button selected={isSelected("/clients")}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
      </Link>
      <Link href="/projects">
        <ListItem button>
          <ListItemIcon selected={isSelected("/proyects")}>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>

    </div>
  )

}
