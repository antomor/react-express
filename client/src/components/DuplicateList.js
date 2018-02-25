import React, { Component } from 'react';
import PropTypes from "prop-types";
import DuplicateItem from './DuplicateItem'

class DuplicateList extends Component {

  render() {
      var items = this.props.items.map(x => {
        return <DuplicateItem key={x.key} item={x}/>
      });
    return (
      <ul >
        {items}
      </ul>
    );
  }
}

DuplicateList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }))
}

export default DuplicateList;