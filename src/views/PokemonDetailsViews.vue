<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
import { usePokeStore } from '@/stores/poke';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { arrowBackOutline } from 'ionicons/icons';
import AppChipPill from '../components/AppChipPill.vue';

const route = useRoute();
const router = useRouter();
const pokeStore = usePokeStore();
const { pokemon } = storeToRefs(pokeStore);
const getPokemonTypes = computed(() => {
  return pokemon.value?.types.map((p) => p.type.name);
});
onMounted(() => {
  pokeStore.getPokemonById(Number(route.params.id));
});
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="1">
              <ion-button fill="clear" @click="router.push({ name: 'Home' })">
                <ion-icon :icon="arrowBackOutline" />
              </ion-button>
            </ion-col>
            <ion-col size="11">
              <ion-title>Detalle del Pokemon</ion-title>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="6" class="ion-text-start">
            <ion-row class="ion-text-center">
              <ion-col size="12">
                <ion-title>
                  <h1 class="ion-text-capitalize">
                    #{{ pokemon?.id }} {{ pokemon?.name }}
                  </h1>
                </ion-title>
              </ion-col>
              <ion-col size="6"> Weight {{ pokemon?.weight }} </ion-col>
              <ion-col size="6"> Height {{ pokemon?.height }} </ion-col>
              <ion-col size="12">
                <ion-title> Types </ion-title>
              </ion-col>
              <ion-col
                size="6"
                v-for="(p, index) of getPokemonTypes"
                :key="index"
              >
                <AppChipPill :type-name="p" />
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="6" class="ion-text-center">
            <img :src="pokemon?.sprites.other.dream_world.front_default" />
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="10">
            <ion-title> Statistics </ion-title>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="10">
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[0].base_stat }}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[1].base_stat }}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[2].base_stat }}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[3].base_stat }}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[4].base_stat }}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {{ pokemon?.stats[5].base_stat }}
                </span>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<style scoped>
img {
  width: 20rem;
  height: 425px;
  object-fit: contain;
}
.stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  margin-top: 3rem;
}

.stat-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-group span {
  flex: 20%;
  font-weight: 500;
  font-size: 18px;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background-color: #072ac8;
  border-radius: 10px;
}
</style>
