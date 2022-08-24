import 'styled-components';

import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors.light;
    fonts: typeof fonts;
    sizes: typeof sizes;
  }
}
