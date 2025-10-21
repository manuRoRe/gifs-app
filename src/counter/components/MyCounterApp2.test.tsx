import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 30,
    handleAdd: handleAddMock,
    handleSubtract: handleSubstractMock,
    handleReset: handleResetMock,
  }),
}));

describe("MyCounterApp", () => {
  test("should render MyCounterApp", () => {
    render(<MyCounterApp />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 30"
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "reset" })).toBeDefined();
  });

  test("Should call handleAdd if button is clicked", () => {
    render(<MyCounterApp />);
    const buttonIncrement = screen.getByRole("button", { name: "+1" });
    fireEvent.click(buttonIncrement);
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });
});
