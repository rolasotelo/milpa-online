import React from "react";
import renderer from "react-test-renderer";

import Cards from "./Cards";

describe("<Cards />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Cards {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
