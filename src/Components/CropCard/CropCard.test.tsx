import React from "react";
import renderer from "react-test-renderer";

import CropCard from "./CropCard";

describe("<CropCard />", () => {
  const defaultProps = {
    title: "Corn",
  };
  const wrapper = renderer.create(<CropCard {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
