import React from 'react';
import DuplicateItem from './DuplicateItem';
import renderer from 'react-test-renderer';

describe('Duplicate item', () => {
  it('render', () => {
    const item = {
      key: 'aa',
      value: 1
    }
    const component = renderer.create(
      <DuplicateItem item={item}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
