import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders', () => {
    const component = renderer.create(
      <header />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 
