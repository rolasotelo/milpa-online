import React from "react";
import renderer from "react-test-renderer";

import WelcomePage from "./WelcomePage";

describe("<WelcomePage />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<WelcomePage {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
