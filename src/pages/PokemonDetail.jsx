import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { bgStylePokemonType } from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <article className="w-[min(100%,400px)] bg-white p-6 rounded-lg shadow-md">
        <header
          className={`h-[80px] relative mb-8 ${
            bgStylePokemonType[pokemonData?.types[0]]
          }`}
        >
          <div className="flex justify-center">
            <img src={pokemonData?.image} alt="" className="w-32" />
          </div>
        </header>

        <section className="mt-4 text-center">
          <span className="text-xl font-bold">#{pokemonData?.id}</span>
          <div className="flex items-center">
            <hr className="flex-grow border-t-2" />
            <h3 className="px-2 text-lg capitalize font-bold">
              {pokemonData?.name}
            </h3>
            <hr className="flex-grow border-t-2" />
          </div>
          <div className="flex justify-center items-center mt-2 space-x-4">
            <div>
              <p className="text-sm font-bold text-gray-700">Weight</p>
              <p className="text-sm font-bold text-gray-700">
                {pokemonData?.weight}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">Height</p>
              <p className="text-sm font-bold text-gray-700">
                {pokemonData?.height}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <h5 className="text-lg font-bold">Type</h5>
              <div className="flex space-x-2">
                <p className="bg-blue-300 text-white py-1 px-3 rounded border ">
                  {pokemonData?.types[0]}
                </p>
                <p className="bg-purple-500 text-white py-1 px-3 rounded border ">
                  {pokemonData?.types[1]}
                </p>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <h5 className="text-lg font-bold">Skills</h5>
              <div className="flex space-x-2">
                <p className="bg-white text-gray-800 py-1 px-3 rounded border border-black">
                  {pokemonData?.abilities[0].ability.name}
                </p>
                <p className="bg-white text-gray-800 py-1 px-3 rounded border border-black">
                  {pokemonData?.abilities[1].ability.name}
                </p>
              </div>
            </div>
          </div>

          {/* Finish the section */}

          {/* You might need to style StatBarList component separately */}
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
