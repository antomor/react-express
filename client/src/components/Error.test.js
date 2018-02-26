import React from 'react';
import Error from './Error';
import renderer from 'react-test-renderer';

describe('Error', () => {
  it('renders without msg', () => {
    const component = renderer.create(
      <Error />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with msg "Error"', () => {
    const component = renderer.create(
      <Error msg="Error"/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
