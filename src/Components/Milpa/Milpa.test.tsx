import React from "react";
import renderer from "react-test-renderer";

import Milpa from "./Milpa";

describe("<Milpa />", () => {
  const defaultProps = {
    milpa: [undefined],
  };
  const wrapper = renderer.create(<Milpa {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
