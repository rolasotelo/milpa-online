import React from "react";
import renderer from "react-test-renderer";

import CacaoBoard from "./CacaoBoard";

describe("<CacaoBoard />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<CacaoBoard {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
