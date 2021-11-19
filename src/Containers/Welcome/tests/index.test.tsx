import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Welcome } from "..";

describe("Welcome Page", () => {
  test("should have proper initial state", () => {
    render(<Welcome />);
    // const menuButton = screen.getByRole("button", {
    //   name: "Play",
    // });
    // expect(menuButton).toBeEnabled();
  });
});
