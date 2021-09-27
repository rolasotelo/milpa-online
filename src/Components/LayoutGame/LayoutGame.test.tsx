import React from "react";
import renderer from "react-test-renderer";

import LayoutGame from "./LayoutGame";

describe("<LayoutGame />", () => {
  const defaultProps = {
    children: <div>Hola</div>,
    players: { local: "Gabi", remote: "Rola" },
    yourTurn: true,
  };
  const wrapper = renderer.create(<LayoutGame {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
