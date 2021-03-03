import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: ${theme.colors.primary};
  height: 30px;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 150px;
  }

  p {
    font-size: 0.825rem;
  }
`;

export { Container };
