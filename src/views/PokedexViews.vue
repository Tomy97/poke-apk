<script setup lang="ts">
  import { onMounted, watchEffect } from "vue";
  import {
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonIcon,
    IonTitle
  } from "@ionic/vue";
  import FormInputSearch from "../components/form/FormInputSearch.vue";
  import TheCardImageTitleText from "@/components/TheCardImageTitleText.vue";
  import { usePokeStore } from "@/store/poke";
  import { optionsOutline } from "ionicons/icons";

  const { search, filteredPokemons, getPokemons, handlePokemonFilter } =
    usePokeStore();
  onMounted(() => {
    getPokemons();
    handlePokemonFilter(search);
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
            <FormInputSearch
              placeholder="Busca un poquemon"
              v-model="search"
              @search-pokemon="handlePokemonFilter(search)"
            />
          </ion-col>
        </ion-row>
        {{ search }}
        <ion-row>
          <ion-col
            size="12"
            size-sm="6"
            size-md="6"
            size-lg="3"
            v-for="(p, index) of filteredPokemons"
            :key="index"
          >
            <TheCardImageTitleText :pokemon="p" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
