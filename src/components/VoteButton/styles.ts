import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 8px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  height: 45px;
  width: 45px;
  border: 1px solid ${theme.colors.shadow};
  border-radius: 10px;
  background-color: ${theme.colors.white};
  cursor: pointer;

  :focus {
    outline: none;
  }

  span {
    margin: -12px 0 2px 0;
    font-size: 0.725rem;
    font-weight: 600;
  }
`;

export { Container, Button };
