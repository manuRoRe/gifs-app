import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 15,
    },
  });

  /* fetch(`
        https://api.giphy.com/v1/gifs/search?api_key=D29Frb8SvhayjV8vON6zO7z62yVAVQ19&q=${query}&limit=15&lang=es`);
 */

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
