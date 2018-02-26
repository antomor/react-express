import React from 'react';
import ConnectedInputHandler,{InputHandler} from './InputHandler';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

describe('InputHandler', () => {
  const initialState = {
    anchorEl: null,
    counter: {
      isCalculating: false
    }
  }
  const mockStore = configureStore();
  const store = mockStore(initialState)
  it('renders', () => {
    const component = renderer.create(
      <ConnectedInputHandler store={store}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
