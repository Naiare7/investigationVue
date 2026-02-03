<script setup>
import { ref } from 'vue';
import BaseCard from '../common/BaseCard.vue';

defineProps({
  fruits: {
    type: Array,
    required: true
  }
})

const fruits = ref([
  { id: 1, name: 'Manzana' },
  { id: 2, name: 'Melon' },
  { id: 3, name: 'Fresa' },
  { id: 4, name: 'Coco' },
])
</script>

<template>
  <div>
    <BaseCard>
      <slot name="title" />
      <div v-for="fruit in fruits" :key="fruit.id">
        <slot :fruit="fruit" />
      </div>
    </BaseCard>
    <br>
    <div>
      <slot name="title" />
      <div v-for="fruit in fruits" :key="fruit.id">
        <slot :fruit="fruit" />
      </div>
    </div>
  </div>  
</template>
