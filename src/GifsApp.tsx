import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./hooks/useGifs";

export const GifsApp = () => {
  const { previousTerms, Gifs, handleTermClick, handleSearch } = useGifs();
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
