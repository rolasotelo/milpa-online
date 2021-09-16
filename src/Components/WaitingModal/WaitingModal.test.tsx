import React from "react";
import renderer from "react-test-renderer";

import WaitingModal from "./WaitingModal";

describe("<WaitingModal />", () => {
  const defaultProps = {
    title: "HOLA",
    body: "SHARE",
    buttonText: "COPY",
  };
  const wrapper = renderer.create(<WaitingModal {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
