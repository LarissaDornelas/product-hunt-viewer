import styled from "styled-components";

import { theme } from "styles/theme";

const Container = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

const TabItem = styled.div<{ active?: boolean }>`
  width: 100%;
  color: ${({ active }) =>
    active ? theme.colors.secondary : theme.colors.fontPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid
    ${({ active }) => (active ? theme.colors.secondary : `transparent`)};
  border-radius: 3px;
  font-size: 0.825rem;
  font-weight: 500;
  cursor: pointer;

  transition: border 0.25s;
  :hover {
    color: ${theme.colors.secondary};
  }
`;

export { Container, TabItem };
