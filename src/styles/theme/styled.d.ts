import 'styled-components';

import colors from './colors';
import fonts from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors.light;
    fonts: typeof fonts;
  }
}
