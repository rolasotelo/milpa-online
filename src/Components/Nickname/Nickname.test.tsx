import React from "react";
import renderer from "react-test-renderer";

import Nickname from "./Nickname";

describe("<Nickname />", () => {
  const defaultProps = {
    nickname: "Gabinka",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
    greeting: "HOLA",
  };
  const wrapper = renderer.create(<Nickname {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
