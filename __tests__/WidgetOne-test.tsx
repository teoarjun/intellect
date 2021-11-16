// Mock out all top level functions, such as get, put, delete and post:
import React from 'react';
import renderer from 'react-test-renderer';
import WidgetOne from '../screens/WidgetOne';

jest.mock('react-native-progress-circle', () => 'ProgressCircle');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

it('renders correctly with defaults', () => {
  const navigation = {navigate: jest.fn()};
  const button = renderer
    .create(<WidgetOne name="World" navigation={navigation} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
