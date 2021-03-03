import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 200px;
  right: 200px;
  padding: 30px;
  background: ${theme.colors.white};

  @media (max-width: 800px) {
    left: 0;
    right: 0;
  }
`;
export { Container, Header };
