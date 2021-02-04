import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#CDCDCD",
    }
  }
});

const Navbar = [{page: 'HOME', route: '/'}, {page: 'ABOUT', route: '/about'}, {page: 'MUSIC', route: '/music'}, {page: 'VIDEO', route: 'video'}, {page: 'CONTACT', route: '/contact'}]

export default function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{backgroundColor: "#CDCDCD"}}>
        {Navbar.map((item) => {
          return (
          <ListItem >
            <NavLink style={{color: "black", textDecoration: "none"}} tag={Link} to={item.route}>{item.page}</NavLink>
          </ListItem>
        )})}
      </List>
    </div>
  );

  return (
    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'black'}}> 
      {['MENU'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color: 'white', fontWeight: "bold", fontSize: "20px"}}>{anchor}</Button>
          <Drawer className={classes.root} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}