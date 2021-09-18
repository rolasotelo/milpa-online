import React from "react";
import renderer from "react-test-renderer";

import StatusBoard from "./StatusBoard";

describe("<StatusBoard />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<StatusBoard {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
