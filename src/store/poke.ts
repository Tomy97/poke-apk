import { computed, ref } from "vue";
import { defineStore } from "pinia";
import {
  getPokemonsService,
  getPokemonByIdService
} from "../services/pokemon.service";
import { Pokemon } from "@/interfaces/pokemon.interface";

export const usePokeStore = defineStore("poke", () => {
  const pokemons = ref<Pokemon[]>([]);
  const search = ref<string>("");
  const filteredPokemons = computed(() => {
    if (!search.value) {
      return pokemons.value;
    }
    return pokemons.value.filter((pokemon) => {
      return pokemon.name.includes(search.value);
    });
  });

  const getPokemons = async () => {
    pokemons.value = await getPokemonsService();
  };
  const getPokemonById = async (id: number) => {
    const pokemon = await getPokemonByIdService(id);
    return pokemon;
  };
  const handlePokemonFilter = (newSearch: string) => {
    search.value = newSearch;
  };

  return {
    pokemons,
    search,
    filteredPokemons,
    getPokemons,
    getPokemonById,
    handlePokemonFilter
  };
});
