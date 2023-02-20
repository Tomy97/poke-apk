import { ref } from "vue";
import { defineStore } from "pinia";
import { getPokemonsService } from "../services/pokemon.service";
import { Result } from "../interfaces/pokedex.interface";

export const usePokeStore = defineStore("poke", () => {
  const poke = ref<Result[]>([]);

  const getPokemons = async () => {
    const res = await getPokemonsService();
    poke.value = res;
  };
  return {
    poke,
    getPokemons,
  };
});
