import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ResultView from '../../components/ResultView'
import InputHandler from '../../components/InputHandler'
import Loading from '../../components/Loading'

import {
  countDuplicatesIfValue
} from '../../actions'

class Home extends Component {
  render(){
    const result = this.props.isCalculating ?
        <Loading />:
        <ResultView items={this.props.duplicates} />
    return (
      <div>
        <h1>Home</h1>
        <div>
          <InputHandler />
          {result}
        </div>
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
)(Home)