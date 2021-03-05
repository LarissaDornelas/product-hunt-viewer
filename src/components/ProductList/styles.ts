import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 110px 200px 0 200px;

  @media (max-width: 800px) {
    margin: 110px 0 0 0;
    max-width: 340px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
const ObservableContainer = styled.div`
  display: flex;
  height: 5px;
  justify-content: center;
  align-items: center;
`;

export { Container, LoadingContainer, ObservableContainer };
