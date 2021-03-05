import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { ProductSummary } from "components";

describe("Component: ProductSummary", () => {
  afterEach(cleanup);

  const productSummaryMock = {
    id: "1",
    name: "test",
    description: "test",
    thumbnail: "https://test.com.br",
    votesCount: "200",
  };

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <ProductSummary {...productSummaryMock}></ProductSummary>,
      container
    );
  });

  it("Should render ProductSummary correctly", () => {
    const { getByTestId } = render(
      <ProductSummary {...productSummaryMock}></ProductSummary>
    );

    const voteButton = getByTestId("vote-button-container");
    const productImage = getByTestId("product-image-container");

    expect(getByTestId("product-summary-container")).toContainElement(
      voteButton
    );
    expect(getByTestId("product-summary-container")).toContainElement(
      productImage
    );
    expect(getByTestId("product-summary-container")).toHaveTextContent(
      "testtest200"
    );
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(<ProductSummary {...productSummaryMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
