import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Duplicates from '../../components/Duplicates'

import {
  countDuplicatesIfValue
} from '../../actions'

const Home = props => (
  <div>
    <h1>Home</h1>
    <div>
      <button onClick={(e) => props.countDuplicatesIfValue('hello')} disabled={props.isCalculating}>Calculate</button>
      <Duplicates items={props.duplicates} />
    </div>
  </div>
)

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
)(Home)