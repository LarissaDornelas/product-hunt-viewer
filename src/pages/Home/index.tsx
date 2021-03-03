import React from "react";

import { ProfileImage, DateWidget, SearchButton } from "components";
import { Container, Header } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileImage />
        <DateWidget />
        <SearchButton />
      </Header>
    </Container>
  );
};

export { Home };
