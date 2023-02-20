import axios from "axios";
import { Pokedex } from "./../interfaces/pokedex.interface";
import { Pokemon } from "./../interfaces/pokemon.interface";

export const getPokemonService = async (id: number) => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  
  return data;
};

export const getPokemonsService = async () => {
  const { data } = await axios.get<Pokedex>(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const promises = data.results.map(async (pokedex) => {
    const { data } = await axios.get<Pokemon>(pokedex.url);
    return data;
  });

  const result = await Promise.all(promises);

  return result;
};
