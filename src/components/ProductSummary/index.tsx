import React from "react";

import { Card, ProductImage, VoteButton } from "components";
import { ImageSize } from "components/ProductImage/types";
import { Container, DataContainer } from "./styles";

import { IProductItem } from "components/ProductList/types";

const ProductSummary: React.FC<IProductItem> = (props) => {
  const { name, description, thumbnail, votesCount } = props;

  return (
    <Card>
      <Container>
        <ProductImage imageUrl={thumbnail} size={ImageSize.MEDIUM} />
        <DataContainer>
          <h1>{name}</h1>
          <p>{description}</p>
        </DataContainer>
        <VoteButton votes={+votesCount} />
      </Container>
    </Card>
  );
};

export { ProductSummary };
