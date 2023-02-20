<script setup lang="ts">
  import { usePokeStore } from "@/store/poke";
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  console.log(route.params.id);

  const { getPokemonById } = usePokeStore();

  onMounted(() => {
    getPokemonById(Number(route.params.id));
  });
  // const pokemon = getPokemonById(router.params.id)
</script>
<template>
  <div></div>
</template>
