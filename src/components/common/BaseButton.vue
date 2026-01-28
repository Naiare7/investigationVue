<script setup>
defineProps({
  text: String,
  classNames: String
})
</script>

<template>
  <button :class="['base-button', classNames]">
    {{ text? text : 'button' }}
  </button>
</template>

<style scoped>
.base-button {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #42b883;
  border:0.1rem solid #42b883;
  color: black;
  transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out;
}
.base-button:hover {
    background-color: #56ffb3;
    border:0.2rem solid #42b883;
}
</style>
