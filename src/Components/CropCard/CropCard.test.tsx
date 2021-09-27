import React from "react";
import renderer from "react-test-renderer";
import { Corn } from "../../common/game/crops/Corn/Corn";

import CropCard from "./CropCard";

describe("<CropCard />", () => {
  const defaultProps = {
    crop: Corn,
  };
  const wrapper = renderer.create(<CropCard {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
