import React from 'react';
import Loading from './Loading';
import renderer from 'react-test-renderer';

describe('Loading', () => {
  it('render', () => {
    const component = renderer.create(
      <Loading />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
