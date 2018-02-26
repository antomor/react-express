import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DuplicateItem from './DuplicateItem';
import { withStyles } from 'material-ui/styles';
import GridList from 'material-ui/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});
class DuplicateList extends Component {
  render() {
      var items = this.props.items.map(x => {
        return <DuplicateItem key={x.key} item={x}/>
      });
      const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {items}
          </GridList>
      </div>
    );
  }
}

DuplicateList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }))
}

export default withStyles(styles)(DuplicateList);