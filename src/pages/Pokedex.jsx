import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pajination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsByName,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main className="min-[340px]:mx-10 max-[340px]:mx-2 my-4">
      <section className="grid grid-rows-2 ">
        <p className="">
          <span className="text-[#FE1936] font-inter1 font-bold"> Welcome {name} </span>
          <span className="font-inter1">, Here you can find your favorite Pokémon. </span>
        </p>
        <form className="flex flex-col-[1fr_auto] justify-between  gap-2">
          <div className="">
            <input className="border-b shadow-sm border-l w-[400px] h-[40px] items-center text-center"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Serch pokemon..."
              type="text"
            />
          </div>

          <select className="border-b shadow-sm border-l w-[300px] text-center" value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}       
      />
      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  );
};

export default Pokedex;
