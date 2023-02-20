<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/vue'
import { balloonOutline } from 'ionicons/icons'
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-icon :icon="balloonOutline" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>
