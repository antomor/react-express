import React from 'react';
import Paper from 'material-ui/Paper';
import { GridListTile } from 'material-ui/GridList';

const DuplicateItem = props => {
  return (
    <GridListTile key={props.item.key} cols={2}>
      <Paper> 
        <Paper> 
          {props.item.key}
        </Paper>
        <Paper> 
        {props.item.value}
        </Paper>
      </Paper>
    </GridListTile>
  )
}

export default DuplicateItem;