<script setup lang="ts">
  import { IonSearchbar } from "@ionic/vue";
  import { ref } from "vue";
  const props = defineProps<{
    modelValue: string;
    placeholder: string;
  }>();

  const search = ref(props.modelValue);
</script>
<template>
  <ion-searchbar
    :placeholder="placeholder"
    v-model="search"
    @input="$emit('update:modelValue', search)"
  />
</template>
