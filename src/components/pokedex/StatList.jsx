import React from "react";
import { textStyledPokemonByType } from "../../shared/pokemon";

const StatList = ({ stats, pokemonInfo }) => {
    
  return (
    <ul className="grid gap-2 grid-cols-3 tetx-xs p-2">
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4 className="capitalize line-clamp-1 text-[#9F9F9F] font-roboto1">{stat.name}</h4>
          <span className={`font-bold ${textStyledPokemonByType[pokemonInfo?.types[0]]}`}>{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatList;
