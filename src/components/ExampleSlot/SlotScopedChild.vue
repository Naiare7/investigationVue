<script setup>
import { ref } from 'vue';

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
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">
      <slot :fruit="fruit" />
    </li>
  </ul>
</template>
