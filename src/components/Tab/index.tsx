import React from "react";

import { ITab, ITabItem } from "./types";
import { Container, TabItem } from "./styles";

const Tab: React.FC<ITab> = (props) => {
  const { tabItems, toggleTab } = props;

  return (
    <Container>
      {tabItems.map((item: ITabItem, index: number) => (
        <TabItem
          key={index}
          active={item.active}
          onClick={() => toggleTab(index)}
        >
          {item.title}
        </TabItem>
      ))}
    </Container>
  );
};

export { Tab };
