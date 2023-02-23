<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon.interface';
import {
  IonCard,
  IonCardContent,
  IonText,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/vue';
import AppChipPill from '../components/AppChipPill.vue';
defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <router-link
    :to="{ name: 'PokeDetails', params: { id: pokemon.id } }"
    class="card-link"
  >
    <ion-card>
      <div class="card-img">
        <img
          :alt="pokemon.name"
          :src="pokemon.sprites.other.dream_world.front_default"
        />
      </div>
      <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-text color="medium">
                <h2>{{ pokemon.name }}</h2>
              </ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-text>
                <span># {{ pokemon.id }}</span>
              </ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-text> </ion-text>
              <ion-text class="ion-margin-end">
                <span class="span-text">Stats</span>
                <span class="stat-style">
                  {{ pokemon.stats[0].base_stat }}
                </span>
              </ion-text>
              <ion-text>
                <span class="span-text">Experiencia</span>
                <span class="stat-style">
                  {{ pokemon.base_experience }}
                </span>
              </ion-text>
            </ion-col>
            <ion-col
              size="4"
              size-md="5"
              size-lg="4"
              v-for="p of pokemon.types"
              :key="p.slot"
            >
              <AppChipPill :type-name="p.type.name" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </router-link>
</template>
<style scoped>
.card-link {
  text-decoration: none;
  min-height: 100%;
}
ion-card {
  border-radius: 16px;
}
ion-text h2 {
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #3b3b3b;
  text-transform: capitalize;
}

ion-text span {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #8d91a5;
}
.card-img {
  background-color: #ececf2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.card-img img {
  width: 164px;
  height: 173px;
  object-fit: contain;
}
.span-text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #8d91a5;
  margin-right: 0.25rem;
}
.stat-style {
  color: #55596d;
}
</style>
