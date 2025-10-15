import { useState } from "react";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [Gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClick = (search: string) => {
    console.log(search);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase();
    query = query.trim();
    if (query.length !== 0) {
      if (previousTerms.includes(query)) return;

      setPreviousTerms([query, ...previousTerms.slice(0, 7)]);

      const gifs = await getGifsByQuery(query);

      setGifs(gifs);
    }
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Gifs App"
        subtitle="Encuentra los mejores gifs"
      ></CustomHeader>

      {/* Buscador */}
      <SearchBar placeHolder="Buscar Gifs" onQuery={handleSearch}></SearchBar>

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClick}
      ></PreviousSearches>

      {/* GIFS */}
      <GifList gifs={Gifs}></GifList>
    </>
  );
};
