import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { Loading } from "components";
import { theme } from "styles/theme";

describe("Component: Loading", () => {
  afterEach(cleanup);

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Loading />, container);
  });

  it("Should render Loading correctly", () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId("loading-container")).toHaveStyle({
      border: `5px solid ${theme.colors.shadow}`,
      borderTop: `5px solid ${theme.colors.secondary}`,
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      animation: "bgrRMf 2s linear infinite",
    });
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
