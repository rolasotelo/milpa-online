import React from "react";
import renderer from "react-test-renderer";

import Calendar from "./Calendar";

describe("<Calendar />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Calendar {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
