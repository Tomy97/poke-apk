<script setup lang="ts">
import { usePokeStore } from '@/stores/poke';
import { IonSearchbar } from '@ionic/vue';

defineEmits(['searchPokemon']);
defineProps<{
  placeholder: string;
}>();

const { handlePokemonFilter } = usePokeStore();
</script>
<template>
  <ion-searchbar
    :placeholder="placeholder"
    @keyup="handlePokemonFilter($event.target.value)"
  />
</template>
