import React from "react";

interface SearchBarProps {
  placeHolder?: string;
}
export const SearchBar = ({ placeHolder = "Buscar" }: SearchBarProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeHolder} />
      <button type="submit">Buscar</button>
    </div>
  );
};
