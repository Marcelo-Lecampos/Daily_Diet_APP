import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}


// explicação do código acima:

// declare module 'styled-components' = serve para sobrescrever o tipo do styled-components;

// type ThemeType = typeof theme:
// --> ThemeType é um tipo do styled-components que recebe o tipo do theme;
// --> ele é configurado para receber o tipo do theme;
// --> no exemplo estamos sobrescrevendo o tipo do styled-components para receber o tipo do theme;
// --> o typeof é para pegar o tipo do theme; (ele lê o tipo do theme e passa para o ThemeType)

// export interface DefaultTheme extends ThemeType { }:
// --> DefaultTheme é uma interface do styled-components que é configurada para receber um type;
