import React from "react";
import renderer from "react-test-renderer";

import Crop from "./Crop";

describe("<Crop />", () => {
  const defaultProps = {
    text: "🌽",
  };
  const wrapper = renderer.create(<Crop {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
