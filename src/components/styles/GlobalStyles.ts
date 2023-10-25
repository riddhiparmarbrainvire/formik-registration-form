import { createGlobalStyle } from "styled-components";
import { Theme } from "../../Interface";

interface GlobalProps {
  theme?: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalProps>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Young+Serif&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Young Serif', serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;
