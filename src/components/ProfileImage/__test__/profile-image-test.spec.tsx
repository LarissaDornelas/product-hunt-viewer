import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { ProfileImage } from "components";

describe("Component: ProfileImage", () => {
  afterEach(cleanup);
  const imageUrl = "http://test.com";

  it("Should render without crashing", () => {
    const container = document.createElement("div");

    ReactDOM.render(<ProfileImage imageUrl={imageUrl} />, container);
  });

  it("Should render ProfileImage correctly", () => {
    const { getByTestId } = render(<ProfileImage imageUrl={imageUrl} />);

    expect(getByTestId("profile-image-container")).toHaveStyle({
      backgroundImage: "url(http://test.com)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "40px",
      width: "40px",
      borderRadius: "50%",
    });
  });
  it("matches snapshot", () => {
    const tree = renderer.create(<ProfileImage imageUrl={imageUrl} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
