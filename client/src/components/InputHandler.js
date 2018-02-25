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
    this.checkCharDuplication = this.checkCharDuplication.bind(this)
    this.checkStringDuplication = this.checkStringDuplication.bind(this)
  }

  handleInputValueChange(e) {
    this.setState({inputValue: e.target.value})
  }

  checkCharDuplication(e) {
    this.props.countDuplicatesIfValue(this.state.inputValue, 1)
  }

  checkStringDuplication(e) {
    this.props.countDuplicatesIfValue(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputValueChange}
          placeholder="Type or paste a string"/>
        <button onClick={this.checkCharDuplication}>Check char</button>
        <button onClick={this.checkStringDuplication}>Check string</button>
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