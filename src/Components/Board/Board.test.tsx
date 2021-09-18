import React from "react";
import renderer from "react-test-renderer";

import Board from "./Board";

describe("<Board />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Board {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
