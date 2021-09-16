import React from "react";
import renderer from "react-test-renderer";

import HeroBox from "./HeroBox";

describe("<HeroBox />", () => {
  const defaultProps = {
    onClick: () => {},
    text: "PLAY",
  };
  const wrapper = renderer.create(<HeroBox {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
