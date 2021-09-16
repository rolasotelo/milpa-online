import React from "react";
import renderer from "react-test-renderer";

import Layout from "./Layout";

describe("<Layout />", () => {
  const defaultProps = {
    children: <div>Hola</div>,
  };
  const wrapper = renderer.create(<Layout {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
