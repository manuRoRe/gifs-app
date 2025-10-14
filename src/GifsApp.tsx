import React, { useState } from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball"]);
  /**
   * Logs the term to the console when a term is clicked
   * @param {string} term - The term that was clicked
   */
  const handleTermClick = (search: string) => {
    console.log(search);
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Gifs App"
        subtitle="Encuentra los mejores gifs"
      ></CustomHeader>

      {/* Buscador */}
      <SearchBar placeHolder="Buscar Gifs"></SearchBar>

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
