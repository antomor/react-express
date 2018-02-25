import React from 'react';
import Error from './Error';
import renderer from 'react-test-renderer';

describe('Error', () => {
  it('render without msg', () => {
    const component = renderer.create(
      <Error />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with msg "Error"', () => {
    const component = renderer.create(
      <Error msg="Error"/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
