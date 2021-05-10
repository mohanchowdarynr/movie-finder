import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Movies from "./Movies";

const drawerWidth = 240
const theme = createMuiTheme();
const useStyles = makeStyles({
  page: {
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth, 
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#fff',
  },
  title:{
    padding:theme.spacing(3)
  },
  option: {
    padding:theme.spacing(3)
  }
})

export default function Layout() {
  const classes = useStyles()
  const menuItems = [
    { 
      text: 'Watch List', 
      icon: <AddCircleOutlineOutlined color="primary" />, 
      path: '/' 
    },
    { 
      text: 'Watched', 
      icon: <SubjectOutlined color="primary" />, 
      path: '/' 
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Typography variant="h5" className={classes.title}>
            Movie Zone
        </Typography>
          <Divider />
          <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              // onClick={() => history.push(item.path)}
              // className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        {/* links/list section */}
        
      </Drawer>

      {/* main content */}
      {/* <div className={classes.page}> */}
        <Movies />
      {/* </div> */}
    </div>
  )
}
