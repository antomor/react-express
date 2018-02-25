import fetch from 'cross-fetch';
import { COUNT_RECEIVED, COUNT_REQUEST } from '../modules/counter';

function countRequest(json) {
  return {
    type: COUNT_REQUEST
  };
}

function countReceived(json) {
  return {
    type: COUNT_RECEIVED,
    duplicates: json.duplicates,
  };
}

function countDuplicates(value, length) {
  return dispatch => {
    setTimeout(() => {
      const url = `/api/duplication/string/${value}?length=${length}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(countReceived(json)))
    }, 3000);
    
  }
}

export function countDuplicatesIfValue(value, length) {
  return (dispatch, getState) => {
    if (value) {
      dispatch(countRequest())
      return dispatch(countDuplicates(value, length))
    } else {
      return Promise.resolve();
    }
  }
}