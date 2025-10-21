import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("should render MyCounterApp", () => {
    render(<MyCounterApp />);
    screen.debug();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 12"
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "reset" })).toBeDefined();
  });

  test("should increment counter", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const buttonIncrement = screen.getByRole("button", { name: "+1" });

    fireEvent.click(buttonIncrement);
    expect(labelH1.innerHTML).toContain("counter: 13");
  });
  test("should decrement counter", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const buttonDecrement = screen.getByRole("button", { name: "-1" });

    fireEvent.click(buttonDecrement);
    expect(labelH1.innerHTML).toContain("counter: 11");
  });
});
