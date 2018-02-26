import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: teal[200]
  },
  menuLink: {
    textDecoration: 'none',
    color: grey[50]
  }
};

const Header = (props) => {
  const {classes} = props
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          <Button color="inherit">
            <Link className={classes.menuLink} to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.menuLink} to="/about">About</Link>
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);