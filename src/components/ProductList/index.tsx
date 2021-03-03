import React from "react";

import { Container } from "./styles";
import { IProductList } from "./types";
import { ProductSummary } from "components";

const ProductList: React.FC<IProductList> = () => {
  return (
    <Container>
      <ProductSummary />
    </Container>
  );
};
