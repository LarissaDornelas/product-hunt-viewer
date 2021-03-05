import React, { useRef, useEffect, useCallback } from "react";

import { Container, LoadingContainer, ObservableContainer } from "./styles";
import { IProductItem, IProductList } from "./types";
import { ProductSummary } from "components";
import { Loading } from "components/Loading";

const ProductList: React.FC<IProductList> = (props) => {
  const { data, handleFetchMore, loading } = props;

  const scrollObserver = useRef() as React.MutableRefObject<any>;

  const loadMore = useCallback(
    (entries) => {
      const target = entries[0];

      if (target.isIntersecting) {
        handleFetchMore();
      }
    },
    [handleFetchMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(loadMore);

    if (scrollObserver && scrollObserver.current) {
      observer.observe(scrollObserver.current);
    }

    return () => observer.disconnect();
  }, [scrollObserver, loadMore]);

  return (
    <Container>
      {data.length > 0 && (
        <>
          {data.map((item: IProductItem, index: number) => (
            <ProductSummary key={index} {...item} />
          ))}
          {loading && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}
          <ObservableContainer ref={scrollObserver}></ObservableContainer>
        </>
      )}
    </Container>
  );
};

export { ProductList };
