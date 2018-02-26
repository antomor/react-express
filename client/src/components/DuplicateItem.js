import React from 'react';
import Paper from 'material-ui/Paper';
import { GridListTile } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    backgroundColor: grey[500],
  }),
  itemKey: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderRadius: '10px'
  }),
  itemValue: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
    borderRadius: '10px'
  })
});

const DuplicateItem = props => {
  const { classes } = props;
  return (
    <GridListTile key={props.item.key} cols={3}>
      <Paper className={classes.root}> 
        <Paper className={classes.itemKey}>
          <Typography variant="subheading" gutterBottom>
            {props.item.key}
          </Typography>
        </Paper>
        <Paper className={classes.itemValue}>
          <Typography variant="subheading" gutterBottom>
            {props.item.value}
          </Typography>
        </Paper>
      </Paper>
    </GridListTile>
  )
}

export default withStyles(styles)(DuplicateItem);