import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

const DownNavbar = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
    return (
        <div className="downnavbar">
            <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction label="Tv" icon={<TvIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
        </div>
    )
}

export default DownNavbar
