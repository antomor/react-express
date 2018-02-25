import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  countDuplicatesIfValue
} from '../actions'

class InputHandler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      inputLength: 1
    }
    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.handleInputLengthChange = this.handleInputLengthChange.bind(this)
    this.checkInput = this.checkInput.bind(this)
  }

  handleInputValueChange(e) {
    this.setState({inputValue: e.target.value})
  }

  handleInputLengthChange(e) {
    this.setState({inputLength: e.target.value})
  }

  checkInput(e) {
    this.props.countDuplicatesIfValue(this.state.inputValue, this.state.inputLength)
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputValueChange}
          placeholder="Type or paste a string"/>
        <input 
          type="number"
          value={this.state.inputLength}
          onChange={this.handleInputLengthChange}
          placeholder="Type or paste a string"/>
        <button onClick={this.checkInput}>Check</button> 
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputHandler);