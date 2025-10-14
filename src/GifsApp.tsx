import React, { useState } from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball"]);

  const handleTermClick = (search: string) => {
    console.log(search);
  };

  const handleSearch = (query: string) => {
    query = query.toLowerCase();
    query = query.trim();
    if (query.length !== 0) {
      if (previousTerms.includes(query)) return;

      setPreviousTerms([query, ...previousTerms.slice(0, 7)]);
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
      <GifList gifs={mockGifs}></GifList>
    </>
  );
};
