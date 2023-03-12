import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    colors: {
      yellow: string;
      purple: string;
    };
  }
}
