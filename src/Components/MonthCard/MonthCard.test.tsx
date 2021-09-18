import React from "react";
import renderer from "react-test-renderer";

import MonthCard from "./MonthCard";

describe("<MonthCard />", () => {
  const defaultProps = { text: "Enero", isCurrentMonth: true };
  const wrapper = renderer.create(<MonthCard {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
