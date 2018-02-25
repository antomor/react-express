import React, {Component} from 'react';
import DuplicateList from './DuplicateList'

class ResultView extends Component{
  render(){
    const view = !this.props.items ? 
      <div>Error during calculation</div>:
      <DuplicateList items={this.props.items} />
    return (
      <div>
        {view}
      </div>
    )
  }
}

export default ResultView