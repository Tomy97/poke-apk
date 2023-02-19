<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonToolbar
  } from "@ionic/vue";
  import { getPokemonsService } from "@/services/pokemon.service";
  import { onMounted, ref } from "vue";
  import { Result } from "./../interfaces/pokedex.interface";

  const pokemons = ref<Result[]>();
  onMounted(async () => {
    pokemons.value = await getPokemonsService();
    console.log(pokemons.value);
  });
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>asdmaoksmdas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="pokemon of pokemons" :key="pokemon.name">
          <ion-label> {{ pokemon.name }} </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
