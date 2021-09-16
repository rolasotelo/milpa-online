import React from "react";
import renderer from "react-test-renderer";

import CreateGame from "./CreateGame";

describe("<CreateGame />", () => {
  const defaultProps = {
    onClickCreate: () => {},
    text: "CREATE",
  };
  const wrapper = renderer.create(<CreateGame {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
