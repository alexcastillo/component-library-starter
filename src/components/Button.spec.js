
import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders normally', () => {
    // Render the component and make sure it matches the screenshot.
    const component = renderer.create(
      <Button>
        I am a button!
      </Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onClick calls a custom function', () => {
    // Create a mock function, so we can spy on it and see if it's executed.
    const mockFn = jest.fn();

    const component = renderer.create(
      <Button onClick={mockFn}>
        I am a button!
      </Button>
    );

    let tree = component.toJSON();
    tree.children[0].props.onClick({ currentTarget: '' });
    expect(mockFn.mock.calls.length).toBe(1);
  });
});