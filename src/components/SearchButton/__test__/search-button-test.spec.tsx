import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { SearchButton } from "components";

describe("Component: SearchButton", () => {
  afterEach(cleanup);

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(<SearchButton></SearchButton>, container);
  });

  it("Should render SearchButton correctly", () => {
    const { getByTestId } = render(<SearchButton></SearchButton>);

    expect(getByTestId("search-button-container")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<SearchButton></SearchButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
