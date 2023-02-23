import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import {
  getPokemonsService,
  getPokemonByIdService,
} from '../services/pokemon.service';
import type { Pokemon } from '@/interfaces/pokemon.interface';

export const usePokeStore = defineStore('poke', () => {
  const pokemons = ref<Pokemon[]>([]);
  const search = ref<string>('');
  const pokemon = ref<Pokemon>();

  const filteredPokemons = computed(() => {
    if (search.value === '') {
      return pokemons.value;
    }
    return pokemons.value.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.value.toLowerCase());
    });
  });

  const getPokemons = async () => {
    pokemons.value = await getPokemonsService();
  };
  const getPokemonById = async (id: number) => {
    pokemon.value = await getPokemonByIdService(id);
  };
  const handlePokemonFilter = (newSearch: string) => {
    search.value = newSearch;
  };

  return {
    pokemons,
    search,
    pokemon,
    filteredPokemons,
    getPokemons,
    getPokemonById,
    handlePokemonFilter,
  };
});
