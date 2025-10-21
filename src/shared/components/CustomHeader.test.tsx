import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Mi título";
  const subtitle = "Mi subtítulo";

  test("should render title properly", () => {
    render(<CustomHeader title={title} />);

    const myTitle = screen.getByRole("heading", { level: 1 });
    expect(myTitle.textContent).toBe(title);
  });

  test("should render the description when provided", () => {
    render(<CustomHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(subtitle)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(subtitle);
  });

  test("should not render the description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);

    const mySubtitle = container.querySelector("p");
    expect(mySubtitle).toBeNull();

    const myDiv = container.querySelector(".content-center");
    const p = myDiv?.querySelector("p");
    expect(p).toBeNull();
  });
});
