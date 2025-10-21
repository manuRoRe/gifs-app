import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("GiphyApi", () => {
  test("should be configuren correctly", () => {
    const params = giphyApi.defaults.params;

    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params).toStrictEqual({
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      lang: "es",
    });
  });
});
