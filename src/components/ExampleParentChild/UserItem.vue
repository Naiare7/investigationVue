<script setup>
import BaseButton from '../common/BaseButton.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const selectUser = () => {
  emit('select', props.user)
}
</script>

<template>
  <div class="userItemContainer">
    <div @click="selectUser" style="cursor: pointer">
      👤 {{ user.name }}
    </div>
    <BaseButton
        :text="'Seleccionar'"
        :classNames="'btn-red'"
        @click="selectUser"
    />
  </div>
</template>

<style scoped>
  .btn-red{
    background-color: red;
    border:0.2rem solid red;
    color: white;
  }
  .btn-red:hover {
    background-color: rgb(203, 60, 60);
    border:0.2rem solid red;
  }
  .userItemContainer {
    display: flex;
    background-color: rgb(30, 30, 30);
    border: 0.1rem solid gray;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem;
    gap:1rem;
    justify-content:space-between;
  }
</style>

