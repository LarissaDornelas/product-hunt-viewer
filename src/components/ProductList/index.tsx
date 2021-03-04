import React, { useRef, useEffect } from "react";

import { Container } from "./styles";
import { IProductItem, IProductList } from "./types";
import { ProductSummary } from "components";

const ProductList: React.FC<IProductList> = (props) => {
  const { data } = props;

  const loader = useRef() as React.MutableRefObject<any>;

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [data]);

  const handleObserver = (entities: any) => {
    const target = entities[0];

    console.log(target);

    if (target.isIntersecting) {
      console.log("deu certo");
    }
  };

  return (
    <Container>
      {data.map((item: IProductItem, index) => (
        <ProductSummary {...item} />
      ))}
      {data.length > 0 && (
        <div className="loading" ref={loader} style={{ height: 30 }}></div>
      )}
    </Container>
  );
};

export { ProductList };
