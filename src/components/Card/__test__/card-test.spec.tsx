import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { Card } from "components";

describe("Component: Card", () => {
  afterEach(cleanup);

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Card></Card>, container);
  });

  it("Should render Card correctly", () => {
    const { getByTestId } = render(
      <Card>
        <h1>I'm a children</h1>
      </Card>
    );

    expect(getByTestId("card-container")).toContainHTML(
      "<h1>I'm a children</h1>"
    );
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Card>
          <h1>I'm a children</h1>
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
