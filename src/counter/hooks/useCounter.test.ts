import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { beforeEach } from "node:test";

describe("useCounter", () => {
  test("Should initializa with default values", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(5);
  });

  test("Should initializa with value of 20", () => {
    const initialValue = 20;

    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(20);
  });

  test("Should increment counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(6);
  });

  test("Should decrement counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(4);
  });

  test("Should reset counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(4);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(5);
  });
});
