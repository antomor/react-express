import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResultView from '../../components/ResultView';
import InputHandler from '../../components/InputHandler';
import Loading from '../../components/Loading';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import {
  countDuplicatesIfValue
} from '../../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

class Home extends Component {
  render(){
    const { classes } = this.props;
    const result = this.props.isCalculating ?
        <Loading />:
        <ResultView items={this.props.duplicates} />
    return (
      <div className={classes.root}>
        <h1>Duplicate String Checker</h1>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <div>
            <InputHandler />
            <h3>Duplicate String Checker</h3>
            {result}
          </div>
          </Paper>
        </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isCalculating: state.counter.isCalculating,
  duplicates: state.counter.duplicates
})

const mapDispatchToProps = dispatch => bindActionCreators({
  countDuplicatesIfValue
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home))