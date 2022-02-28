import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {WelcomePage} from '../../pages'

describe("Welcome Page", () => {
    test("should have proper initial state", () => {
        render(<WelcomePage />);
        const menuButton = screen.getByRole("button", {
          name: "Play",
        });
        expect(menuButton).toBeEnabled();
    });
});
