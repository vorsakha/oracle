import React from 'react';
import { CustomThemeProvider } from '../../../src/context/theme';

export default function Theme(story: any) {
  return <CustomThemeProvider>{story()}</CustomThemeProvider>;
}
