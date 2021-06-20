import React from "react";
import renderer from "react-test-renderer";

import CreateOrJoinGame from "./CreateOrJoinGame";

describe("<CreateOrJoinGame />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<CreateOrJoinGame {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
