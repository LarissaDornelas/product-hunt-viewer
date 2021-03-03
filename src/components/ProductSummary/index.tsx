import React from "react";

import { Card } from "components/Card";
import { ProductImage } from "components/ProductImage";

import teste from "assets/images/teste.jpg";
import { ImageSize } from "components/ProductImage/types";
import { Container, DataContainer } from "./styles";

const ProductSummary: React.FC = () => {
  return (
    <Card>
      <Container>
        <ProductImage imageUrl={teste} size={ImageSize.MEDIUM} />
        <DataContainer>
          <h1>Teste</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </DataContainer>
      </Container>
    </Card>
  );
};

export { ProductSummary };
