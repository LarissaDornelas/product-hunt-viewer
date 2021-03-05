import React from "react";
import ReactDOM from "react-dom";
import { format } from "date-fns";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { DateWidget } from "components";

describe("Component: DateWidget", () => {
  afterEach(cleanup);
  const todayDate = format(new Date(), "'Today', Lo LLL ");

  it("Should render without crashing", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <DateWidget>
        <p></p>
      </DateWidget>,
      container
    );
  });

  it("Should render DateWidget correctly", () => {
    const { getByTestId } = render(
      <DateWidget>
        <p>{todayDate}</p>
      </DateWidget>
    );

    expect(getByTestId("date-widget-container")).toContainHTML(
      `<p>${todayDate}</p>`
    );
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <DateWidget>
          <p>{todayDate}</p>
        </DateWidget>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
