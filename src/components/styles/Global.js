import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family:  Helvetica, Arial, sans-serif;
    font-size: 1.15em;
    margin: 0;
    text-align: center
  }
  h1 {
    color: #fff
  }
  p {
    text-align: center;
  }
  img {
    max-width: 100%;
}
`;

export const Paragraph = styled.p`
  color: #fff;
`;

export const theme = {
  colors: {
    header: "#000000",
    body: "#000000",
  },
  mobile: "768px",
};
