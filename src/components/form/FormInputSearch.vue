<script setup lang="ts">
import { IonSearchbar, IonText } from '@ionic/vue'
import { useField, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
defineRule('required', required)
defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: string
  placeholder: string
}>()

const { value, errorMessage } = useField<string>('search', {
  initialValue: props.modelValue,
  rules: required,
})
</script>
<template>
  <ion-searchbar
    :placeholder="placeholder"
    v-model="value"
    @input="$emit('update:modelValue', value)"
  />
  <ion-text>{{ errorMessage }}</ion-text>
</template>
