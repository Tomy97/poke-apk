<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { usePokeStore } from '@/stores/poke';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();
const pokeStore = usePokeStore();
const { pokemon } = storeToRefs(usePokeStore());

onMounted(() => {
  pokeStore.getPokemonById(route.params.id);
});
</script>
<template>
  <ion-page>
    <ion-content>
        
    </ion-content>
  </ion-page>
</template>
