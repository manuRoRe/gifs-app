import React, { type FC } from "react";

interface PreviousSearchesProps {
  searches: string[];

  onLabelClick: (term: string) => void;
}
export const PreviousSearches: FC<PreviousSearchesProps> = ({
  searches,
  onLabelClick,
}) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li
            key={search}
            onClick={() => {
              onLabelClick(search);
            }}
          >
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
