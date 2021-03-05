import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { ProductImage } from "components";
import { ImageSize } from "../types";

describe("Component: ProductImage", () => {
  afterEach(cleanup);
  const imageUrl = "http://test.com";

  it("Should render without crashing", () => {
    const container = document.createElement("div");

    ReactDOM.render(
      <ProductImage imageUrl={imageUrl} size={ImageSize.LARGE} />,
      container
    );
  });

  it("Should render ProductImage correctly", () => {
    const { getByTestId } = render(
      <ProductImage imageUrl={imageUrl} size={ImageSize.LARGE} />
    );

    expect(getByTestId("product-image-container")).toHaveStyle({
      backgroundImage: "url(http://test.com)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "80px",
      width: "80px",
      borderRadius: "10px",
    });
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(<ProductImage imageUrl={imageUrl} size={ImageSize.LARGE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
