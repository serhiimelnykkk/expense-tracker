import styled, { css, type CSSObject } from "styled-components";

export const Customizable = styled.div<{ $css?: CSSObject }>`
  ${(props) =>
    css`
      ${props.$css}
    `}
`;

export const Flex = styled(Customizable)`
  display: flex;
`;
