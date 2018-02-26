import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  centered: {
    margin: 'auto',
    width: '50%',
    padding: theme.spacing.unit * 2
  },
});

const About = (props) => {
  const {classes} = props;
  return (
  <Typography className={classes.centered} variant="display1" gutterBottom>
    This is a sample page, created only for showing the usage of react-router.
  </Typography>
)};

export default withStyles(styles)(About);