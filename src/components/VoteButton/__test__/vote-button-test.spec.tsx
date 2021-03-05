import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { VoteButton } from "components";

describe("Component: VoteButton", () => {
  afterEach(cleanup);

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(<VoteButton votes={200}></VoteButton>, container);
  });

  it("Should render VoteButton correctly", () => {
    const { getByTestId } = render(<VoteButton votes={200}></VoteButton>);

    expect(getByTestId("vote-button-container")).toHaveTextContent("200");
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(<VoteButton votes={200}></VoteButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
