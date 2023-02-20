import { onMounted, ref } from "vue";
import { defineStore } from "pinia";
import { getPokemonsService } from "../services/pokemon.service";
import { Pokemon } from "@/interfaces/pokemon.interface";

export const usePokeStore = defineStore("poke", () => {
  const poke = ref<Pokemon[]>([]);

  const getPokemons = async () => {
    poke.value = await getPokemonsService();
  };

  onMounted(() => {
    getPokemons();
  });

  return {
    poke,
    getPokemons
  };
});
