import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { ProfileImage, DateWidget, SearchButton, Tab } from "components";
import { Container, Header, DataContainer, TabContainer } from "./styles";
import { ITabItem } from "components/Tab/types";
import { IProductItem, IProductList } from "components/ProductList/types";
import { GET_POSTS } from "services/queries/post";

const Home: React.FC = () => {
  const [tabs, setTabs] = useState<ITabItem[]>([
    { title: "Popular", active: true },
    { title: "Newest", active: false },
  ]);
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [first, setFirst] = useState<number>(10);

  const { error, loading, data } = useQuery(GET_POSTS, {
    variables: {
      order: "RANKING",
      first,
    },
  });

  function toggleTab(indexTab: number) {
    const newTabs = tabs.map((tab: ITabItem, index) => {
      return index === indexTab
        ? { ...tab, active: true }
        : { ...tab, active: false };
    });

    setTabs(newTabs);
  }

  function handlePagination() {
    setFirst((oldFirst) => oldFirst + 10);
  }

  function handleGetPosts() {}

  useEffect(() => {
    console.log(process.env.API_ACCESS_TOKEN);
    if (data) {
      console.log(data);
    }
  }, [data]);

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
    </Container>
  );
};

export { Home };
