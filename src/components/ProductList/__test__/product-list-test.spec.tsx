import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ProductList } from "components";

describe("Component: ProductList", () => {
  beforeEach(() => {
    function setupIntersectionObserverMock({
      root = null,
      rootMargin = "",
      thresholds = [],
      disconnect = () => null,
      observe = () => null,
      takeRecords = () => [
        {
          isIntersecting: true,
          boundingClientRect: { x: 10, y: 20, width: 30, height: 40 },
        } as IntersectionObserverEntry,
      ],
      unobserve = () => null,
    } = {}): void {
      class MockIntersectionObserver implements IntersectionObserver {
        readonly root: Element | null = root;
        readonly rootMargin: string = rootMargin;
        readonly thresholds: ReadonlyArray<number> = thresholds;
        disconnect: () => void = disconnect;
        observe: (target: Element) => void = observe;
        takeRecords: () => IntersectionObserverEntry[] = takeRecords;
        unobserve: (target: Element) => void = unobserve;
      }

      Object.defineProperty(window, "IntersectionObserver", {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver,
      });
    }

    setupIntersectionObserverMock();
  });
  afterEach(cleanup);

  const productListMock = {
    data: [],
    handleFetchMore: jest.fn(),
    loading: false,
  };

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <ProductList {...productListMock}></ProductList>,
      container
    );
  });

  it("Should render ProductList correctly", () => {
    const loadMore = jest.fn();
    jest.spyOn(React, "useRef").mockReturnValue({
      current: { clientWidth: 1200 },
    });

    const scrollObserver = { current: document.createElement("div") };

    const observer = new IntersectionObserver(loadMore);
    observer.observe(scrollObserver.current);

    const { getByTestId } = render(
      <ProductList {...productListMock}></ProductList>
    );

    expect(getByTestId("product-list-container")).toBeInTheDocument();
  });

  //   it("matches snapshot", () => {
  //     const tree = renderer
  //       .create(
  //         <Card>
  //           <h1>I'm a children</h1>
  //         </Card>
  //       )
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
