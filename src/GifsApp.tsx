import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
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
        searches={["One Punch", "Dragon Ball"]}
      ></PreviousSearches>

      {/* GIFS */}
      <GifList gifs={mockGifs}></GifList>
    </>
  );
};
