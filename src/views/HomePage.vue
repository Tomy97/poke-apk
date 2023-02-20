<script setup lang="ts">
  import { ref } from "vue";
  import {
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonTitle
  } from "@ionic/vue";
  import FormInputSearch from "../components/form/FormInputSearch.vue";
  import TheCardImageTitleText from "@/components/TheCardImageTitleText.vue";
  import { usePokeStore } from "@/store/poke";
  const search = ref("");
  
  const { poke } = usePokeStore();

</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-title> Buscador de pokemons </ion-title>
          </ion-col>
          <ion-col size="12" class="ion-text-center">
            <FormInputSearch placeholder="Busca el pokemon" v-model="search" />
          </ion-col>
          <ion-col
            size="12"
            size-sm="6"
            size-md="6"
            size-lg="3"
            v-for="(p, index) of poke"
            :key="index"
          >
            <TheCardImageTitleText :pokemon="p" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
