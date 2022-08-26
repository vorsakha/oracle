import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Button } from '../../../src/components/common';
import { BitcoinIcon } from '../../../src/components/common/Button/styles';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView color="#333">{getStory()}</CenterView>)
  .add('default', () => <Button icon={<BitcoinIcon />} />);
