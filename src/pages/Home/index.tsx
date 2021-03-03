import React, { useCallback, useEffect, useState } from "react";

import {
  ProfileImage,
  DateWidget,
  SearchButton,
  Tab,
  ProductList,
} from "components";
import { Container, Header, DataContainer, TabContainer } from "./styles";
import { ITabItem } from "components/Tab/types";
import { IProductItem } from "components/ProductList/types";
import { useGetPosts } from "hooks/posts/useGetPosts";
import { Order } from "hooks/posts/types";

const Home: React.FC = () => {
  const [tabs, setTabs] = useState<ITabItem[]>([
    { title: "Popular", active: true, value: Order.RANKING },
    { title: "Newest", active: false, value: Order.NEWEST },
  ]);
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [order, setOrder] = useState<Order>(Order.RANKING);

  const data = useGetPosts({ order, first: 10 });

  function toggleTab(indexTab: number) {
    const newTabs = tabs.map((tab: ITabItem, index) => {
      return index === indexTab
        ? { ...tab, active: true }
        : { ...tab, active: false };
    });

    const newOrder = newTabs.filter((tab) => tab.active === true);

    setTabs(newTabs);
    setOrder(newOrder[0].value);
  }

  const getAndFormatData = useCallback(() => {
    if (data) {
      const newProducts = data.edges.map((item: any) => {
        const { id, name, description, votesCount, thumbnail } = item.node;
        return {
          id,
          name,
          description,
          votesCount,
          thumbnail: thumbnail.url,
        };
      });
      setProducts(newProducts);
    }
  }, [data]);

  useEffect(() => {
    getAndFormatData();
  }, [getAndFormatData]);

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
      <ProductList data={products} />
    </Container>
  );
};

export { Home };
