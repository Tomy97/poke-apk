<script setup lang="ts">
import { IonChip } from '@ionic/vue';
defineProps<{
  typeName: string;
  type?: { name: string };
}>();
</script>
<template>
  <template v-if="typeName === 'fire' || type?.name === 'fire'">
    <ion-chip color="warning" class="ion-text-capitalize">{{
      typeName
    }}</ion-chip>
  </template>
  <template v-if="typeName === 'water' || type?.name === 'water'">
    <ion-chip color="secondary" class="ion-text-capitalize">{{
      typeName
    }}</ion-chip>
  </template>
  <template
    v-if="
      typeName === 'poison' ||
      typeName === 'poison' ||
      type?.name === 'poison' ||
      type?.name === 'poison'
    "
  >
    <ion-chip color="tertiary" class="ion-text-capitalize">{{
      typeName
    }}</ion-chip>
  </template>
  <template v-if="typeName === 'grass' || type?.name === 'grass'">
    <ion-chip color="success" class="ion-text-capitalize">{{
      typeName
    }}</ion-chip>
  </template>
  <template v-if="typeName === 'flying' || type?.name === 'flying'">
    <ion-chip color="primary" class="ion-text-capitalize">{{
      typeName
    }}</ion-chip>
  </template>
  <template v-if="typeName === 'normal' || type?.name === 'normal'">
    <ion-chip color="medium" class="ion-text-capitalize">{{
      typeName || type?.name
    }}</ion-chip>
  </template>
  <template v-if="typeName === 'bug' || type?.name === 'bug'">
    <ion-chip color="dark" class="ion-text-capitalize">{{
      typeName || type?.name
    }}</ion-chip>
  </template>
</template>
