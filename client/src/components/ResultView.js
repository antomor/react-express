import React, {Component} from 'react';
import PropTypes from "prop-types";
import DuplicateList from './DuplicateList';
import Error from './Error';

class ResultView extends Component{
  render(){
    const msg = "Something wrong with count"
    const view = !this.props.items ? 
      <Error msg={msg}/>:
      <DuplicateList items={this.props.items} />
    return (
      <div>
        {view}
      </div>
    )
  }
}

ResultView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }))
}

export default ResultView