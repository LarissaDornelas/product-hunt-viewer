import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 200px;
  right: 200px;
  padding: 25px;
  background: ${theme.colors.white};
  box-shadow: 0px 54px 41px -33px rgba(0, 0, 0, 0.52);
  z-index: 2;

  @media (max-width: 800px) {
    left: 0;
    right: 0;
  }
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TabContainer = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 130px 200px 0 200px;

  @media (max-width: 800px) {
    margin: 130px 0 0 0;
  }
`;

export const CardContent = styled.div``;

export const ProductImage = styled.div``;

export const Ranking = styled.div``;

export { Container, Header, DataContainer, TabContainer, CardList };
