import React from "react";

import { ProfileImage, DateWidget } from "components";
import { Container, Header } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileImage />
        <DateWidget />
        {/* <SearchButton />
     
      <Tab titles={[]} active={} /> */}
      </Header>
    </Container>
  );
};

export { Home };
