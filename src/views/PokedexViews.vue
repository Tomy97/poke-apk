<script setup lang="ts">
import { onMounted } from 'vue';
import {
  IonContent,
  IonPage,
  IonCol,
  IonGrid,
  IonRow,
  IonTitle,
} from '@ionic/vue';
import FormInputSearch from '../components/form/FormInputSearch.vue';
import TheCardImageTitleText from '@/components/TheCardImageTitleText.vue';
import { usePokeStore } from '@/stores/poke';
import { storeToRefs } from 'pinia';

const pokeStore = usePokeStore();

const { filteredPokemons } = storeToRefs(usePokeStore());

onMounted(() => {
  pokeStore.getPokemons();
});
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-col size="12" class="ion-text-center">
          <ion-title> Pokedex </ion-title>
        </ion-col>
        <ion-row class="ion-align-items-center ion-justify-content-end">
          <ion-col size="12">
            <FormInputSearch placeholder="Busca un pokemon" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col
            size="12"
            size-sm="6"
            size-md="6"
            size-lg="3"
            v-for="p of filteredPokemons"
            :key="p.id"
          >
            <TheCardImageTitleText :pokemon="p" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
