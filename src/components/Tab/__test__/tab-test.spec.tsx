import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  cleanup,
  getByTestId,
  getAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { Tab } from "components";
import { Order } from "hooks/posts/types";

describe("Component: Tab", () => {
  afterEach(cleanup);

  const tabMock = {
    tabItems: [
      { title: "popular", active: true, value: Order.RANKING },
      { title: "newest", active: false, value: Order.NEWEST },
    ],
    toggleTab: jest.fn(),
  };

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(<Tab {...tabMock}></Tab>, container);
  });

  it("Should render Tab correctly", () => {
    const { getByTestId } = render(<Tab {...tabMock}></Tab>);

    expect(getByTestId("tab-container")).toHaveTextContent("popularnewest");
  });

  it("Should click tab", () => {
    const { getAllByTestId } = render(<Tab {...tabMock}></Tab>);
    const tabItem = getAllByTestId("tab-item");

    tabItem[0].click();

    expect(tabMock.toggleTab).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Tab {...tabMock}></Tab>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
