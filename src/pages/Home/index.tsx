import React, { useState } from "react";

import {
  ProfileImage,
  DateWidget,
  SearchButton,
  Tab,
  ProductSummary,
} from "components";
import {
  Container,
  Header,
  DataContainer,
  TabContainer,
  CardList,
} from "./styles";
import { ITabItem } from "components/Tab/types";

const Home: React.FC = () => {
  const [tabs, setTabs] = useState<ITabItem[]>([
    { title: "Popular", active: true },
    { title: "Newest", active: false },
  ]);

  function toggleTab(indexTab: number) {
    const newTabs = tabs.map((tab: ITabItem, index) => {
      return index === indexTab
        ? { ...tab, active: true }
        : { ...tab, active: false };
    });

    setTabs(newTabs);
  }

  return (
    <Container>
      <Header>
        <DataContainer>
          <ProfileImage />
          <DateWidget />
          <SearchButton />
        </DataContainer>
        <TabContainer>
          <Tab toggleTab={toggleTab} tabItems={tabs} />
        </TabContainer>
      </Header>
      <CardList>
        <ProductSummary>fsfs</ProductSummary>
      </CardList>
    </Container>
  );
};

export { Home };
