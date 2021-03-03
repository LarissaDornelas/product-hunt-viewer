import React from "react";

import { Container } from "./styles";
import { IProductItem, IProductList } from "./types";
import { ProductSummary } from "components";

const ProductList: React.FC<IProductList> = (props) => {
  const { data } = props;

  console.log("óiiii", data);

  return (
    <Container>
      {data.map((item: IProductItem, index) => (
        <ProductSummary {...item} />
      ))}
    </Container>
  );
};

export { ProductList };
