import React from "react";
import renderer from "react-test-renderer";

import JoinGame from "./JoinGame";

describe("<JoinGame />", () => {
  const defaultProps = {
    onClickJoin: (code: string) => {},
    text: "JOIN",
  };
  const wrapper = renderer.create(<JoinGame {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
