import React from "react";
import renderer from "react-test-renderer";

import Milpa from "./Milpa";

describe("<Milpa />", () => {
  const defaultProps = {
    isYourMilpa: true,
    milpa: [undefined],
    edges: {
      top: [undefined],
      bottom: [undefined],
      left: [undefined],
      right: [undefined],
    },
  };
  const wrapper = renderer.create(<Milpa {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
