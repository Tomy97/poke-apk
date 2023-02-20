<script setup lang="ts">
  import { IonSearchbar } from "@ionic/vue";

  defineEmits(["searchPokemon"]);
  defineProps<{
    placeholder: string;
  }>();
</script>
<template>
  <ion-searchbar
    :placeholder="placeholder"
    @ionChange="() => $emit('searchPokemon')"
  />
</template>
