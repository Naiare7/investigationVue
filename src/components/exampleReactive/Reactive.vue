<script setup>
import { reactive } from 'vue'
import BaseButton from '../common/BaseButton.vue'
import BaseCard from '../common/BaseCard.vue'

const user = reactive({
  name: 'Ana',
  age: 25,
  resetAge(){
    this.age=25
    return this.age
  }
})

const birthday = () => {
  user.age++
}
</script>

<template>
    <div>
        <h1>Ejemplo usando reactive</h1>
        <br>
        <BaseCard>
            <h2>Nombre: {{ user.name }}</h2>
            <h2>Edad: {{ user.age }}</h2>
            <div class="divBtns">
                <BaseButton :text="'Cumplir Años'" @click="birthday"/>
                <BaseButton :text="'Reiniciar Edad'" @click="user.resetAge()"/>
            </div>
        </BaseCard>
    </div>
</template>

<style scoped>
.divBtns {
    display: flex;
    gap: 1rem;
    margin: 1rem 0 0 0;
}
</style>
