import { act, fireEvent, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";

describe("useGifs", () => {
  test("Should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current).toStrictEqual({
      previousTerms: [],
      Gifs: [],
      handleTermClick: expect.any(Function),
      handleSearch: expect.any(Function),
    });
  });
  test("Should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("spiderman");
    });

    expect(result.current.Gifs.length).toBe(15);
  });

  test("Should return a list of gifs when handleTermClick is clicked", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick("spiderman");
    });

    expect(result.current.Gifs.length).toBe(15);
  });
});
