import styled, { keyframes } from "styled-components";
import { theme } from "styles/theme";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }

`;

export const Container = styled.div`
  border: 5px solid ${theme.colors.shadow};
  border-top: 5px solid ${theme.colors.secondary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 2s linear infinite;
`;
