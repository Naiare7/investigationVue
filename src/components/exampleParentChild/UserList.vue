<script setup>
import { ref } from 'vue'
import UserItem from './UserItem.vue'
import BaseButton from '../common/BaseButton.vue'

const users = ref([
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Carlos' },
  { id: 3, name: 'Luis' }
])

let userSelected = ref("");

const handleSelectUser = (user) => {
  userSelected.value = user.name
}
</script>

<template>
  <div>
    <h1>Relacion parent child</h1>
    <br>
    <h2>El hijo emite enventos y recibe propiedades</h2>
    <h2>El padre define los datos, escucha eventos, envia propiedades</h2>
    <br>
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
    <br>
    <div v-if='userSelected'><h2>Usuario seleccionado: {{ userSelected }}</h2></div>
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
