import 'styled-components';
import { DefaultTheme } from '../styles/Themes';

export type Theme = typeof DefaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
