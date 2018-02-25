import React, { Component } from 'react';
import PropTypes from "prop-types";

class Duplicates extends Component {

  render() {
      var items = this.props.items.map(x => {
        return <li key={x.key} >{x.key}:{x.value}</li>
      });
    return (
      <ul >
        {items}
      </ul>
    );
  }
}

Duplicates.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }))
}

export default Duplicates;