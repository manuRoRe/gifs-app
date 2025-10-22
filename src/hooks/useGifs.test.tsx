import { act, fireEvent, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as actions from "../gifs/actions/get-gifs-by-query.action";

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

  test("Shoul return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick("spiderman");
    });

    expect(result.current.Gifs.length).toBe(15);

    vi.spyOn(actions, "getGifsByQuery").mockRejectedValue(
      new Error("This is an error")
    );

    await act(async () => {
      await result.current.handleTermClick("spiderman");
    });

    expect(result.current.Gifs.length).toBe(15);
  });

  test("Should retrn no more than 8 previous terms ", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(actions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("spiderman1");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman2");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman3");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman4");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman5");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman6");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman7");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman8");
    });
    await act(async () => {
      await result.current.handleSearch("spiderman9");
    });

    expect(result.current.previousTerms).toStrictEqual([
      "spiderman9",
      "spiderman8",
      "spiderman7",
      "spiderman6",
      "spiderman5",
      "spiderman4",
      "spiderman3",
      "spiderman2",
    ]);
  });
});
