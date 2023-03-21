import '@emotion/react';
import type { Theme as JdsTheme } from 'styling/types';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends JdsTheme {}
}
