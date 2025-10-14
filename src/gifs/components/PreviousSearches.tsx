import React, { type FC } from "react";

interface PreviousSearchesProps {
  searches: string[];
}
export const PreviousSearches: FC<PreviousSearchesProps> = ({ searches }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search}>{search}</li>
        ))}
      </ul>
    </div>
  );
};
