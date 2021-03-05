import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  height: 70px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
  overflow: hidden;
  margin: 0px 100px 0px 15px;
  text-overflow: ellipsis;
  h1 {
    font-size: 0.9rem;
    padding: 0px;
    margin: 0px 0px 5px 0px;
    font-weight: 400;
  }

  p {
    font-size: 0.825rem;
    padding: 0px;
    margin: 0px;
    white-space: nowrap;
    max-width: 100px;
    color: ${theme.colors.fontPrimary};
  }
`;

export { Container, DataContainer };
