import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Navigation } from '../../../src/components';

storiesOf('Navigation', module)
  .addDecorator(getStory => <CenterView color="#333">{getStory()}</CenterView>)
  .add('default', () => <Navigation />);
