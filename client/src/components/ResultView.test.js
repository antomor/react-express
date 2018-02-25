import React from 'react';
import ResultView from './ResultView';
import renderer from 'react-test-renderer';

describe('ResultView', () => {
  it('renders the items properly', () => {
    const items = [
      {
        key: 'aa',
        value: 1
      },
      {
        key: 'bb',
        value: 10
      }
    ]
    const component = renderer.create(
      <ResultView items={items}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Error', () => {
    const component = renderer.create(
      <ResultView />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
