import { useRef, useState } from "react";
import type { Gif } from "../gifs/interfaces/gif.interface";
import { getGifsByQuery } from "../gifs/actions/get-gifs-by-query.action";

//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [Gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (search: string) => {
    if (gifsCache.current[search]) {
      setGifs(gifsCache.current[search]);
      return;
    }

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase();
    query = query.trim();
    if (query.length !== 0) {
      if (previousTerms.includes(query)) return;

      setPreviousTerms([query, ...previousTerms.slice(0, 7)]);

      const gifs = await getGifsByQuery(query);
      setGifs(gifs);

      gifsCache.current[query] = gifs;
    }
  };
  return {
    //PROPS
    previousTerms,
    Gifs,

    //Methods
    handleTermClick,
    handleSearch,
  };
};
