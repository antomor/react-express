import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

import {
  countDuplicatesIfValue
} from '../actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: 200,
  },
});

class InputHandler extends Component {
  state = {
    anchorEl: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.checkCharDuplication = this.checkCharDuplication.bind(this)
    this.checkStringDuplication = this.checkStringDuplication.bind(this)
  }
  

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleInputValueChange(e) {
    this.setState({inputValue: e.target.value})
  }

  checkCharDuplication(e) {
    this.handleClose();
    this.props.countDuplicatesIfValue(this.state.inputValue, 1)
  }

  checkStringDuplication(e) {
    this.handleClose();
    this.props.countDuplicatesIfValue(this.state.inputValue)
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div>
        
        <Grid container spacing={24}>
          <Grid item xs={9}>
            <TextField
            id="helperText"
            label="String to be checked"
            className={classes.textField}
            helperText="Only alpha-numberic"
            margin="normal"
            value={this.state.inputValue}
            placeholder="Type or paste a string"
            onChange={this.handleInputValueChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleOpen}
              disabled={this.state.isCalculating}
              color="secondary"
              variant="raised">
            Check
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            >
            <MenuItem onClick={this.checkCharDuplication}>Char Duplication</MenuItem>
            <MenuItem onClick={this.checkStringDuplication}>All Duplicates</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
    );
  }
}

InputHandler.propTypes = {
}
const mapStateToProps = state => ({
  isCalculating: state.counter.isCalculating
})

const mapDispatchToProps = dispatch => bindActionCreators({
  countDuplicatesIfValue
}, dispatch)

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(InputHandler));