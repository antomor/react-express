import React from 'react';
import DuplicateList from './DuplicateList';
import renderer from 'react-test-renderer';

describe('DuplicateList', () => {
  it('renders', () => {
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
      <DuplicateList items={items}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});