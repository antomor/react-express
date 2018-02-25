import React from 'react';

const DuplicateItem = props => {
  return (
    <li>{props.item.key}:{props.item.value}</li>
  )
}

export default DuplicateItem;