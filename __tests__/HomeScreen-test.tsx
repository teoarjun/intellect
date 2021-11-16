// Mock out all top level functions, such as get, put, delete and post:
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';

it('renders correctly with defaults', () => {
  const navigation = {navigate: jest.fn()};
  const button = renderer
    .create(<HomeScreen name="World" navigation={navigation} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
