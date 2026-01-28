<script setup>
import { ref } from 'vue'
import UserItem from './UserItem.vue'
import BaseButton from '../common/BaseButton.vue'

const users = ref([
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Carlos' },
  { id: 3, name: 'Luis' }
])

const handleSelectUser = (user) => {
  console.log('Usuario seleccionado:', user.name)
}
</script>

<template>
  <div class="userListContainer">
    <h2>Lista de usuarios</h2>

    <UserItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      @select="handleSelectUser"
    />

    <BaseButton/>

  </div>
</template>

<style scoped>
.userListContainer {
  display: flex;
  flex-direction: column;
  border: 0.3rem solid gray;
  padding: 1.5rem;
  border-radius: 1rem;
}
</style>
