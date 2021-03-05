import React from "react";

import { Container } from "./styles";
import { IProductImage } from "./types";

const ProductImage: React.FC<IProductImage> = (props) => {
  const { imageUrl, size } = props;

  return (
    <Container
      data-testid="product-image-container"
      imageUrl={imageUrl}
      size={size}
    />
  );
};

export { ProductImage };
