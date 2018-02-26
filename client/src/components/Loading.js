import React from 'react';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Loading = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

export default withStyles(styles)(Loading);