<script setup>
import { shallowRef, ref } from 'vue'
import { shallowReactive } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import BaseButton from '../common/BaseButton.vue'

/* shallowRef() */
const data = shallowRef({
  items: []
})

const updateItems = () => {
    //no es reactivo, no detecta getters ni setters 
    data.value.items.push('newItem')
    console.log(data.value.items); 
}   

const replaceData = () => {
    // es reactivo porque solo afecta a los elementos raiz. 
    data.value = { items: ['nuevo 1', 'nuevo 2', 'nuevo 3'] }
}

/* shallowReactive */
const state = shallowReactive({
  user: {
    name: 'Felipe',
  }
})

const changeName = () => {
    // no es reactivo
    state.user.name = 'María'
    console.log(state.user);
}

const replaceState = () => {
    // es reactivo porque modificamos la propiedad raiz.
    state.user = {
        name: 'Adriana',
        age: 30,
        hobbies: ['Videojuegos', 'Tenis']
    }
}
</script>

<template>
    <div>
        <h1>Ejemplo con shallowRefs()</h1>
        <br>
        <BaseCard>
            <div class="divBtns">
                <BaseButton :text="'Agregar item sin reactividad'" @click="updateItems"/>
                <BaseButton :text="'Reset con reactividad'" @click="replaceData"/>
            </div>
            <br>
            <h2>Lista de Items:</h2>
            <h2 v-for="(item, index) in data.items" :key="index">
                {{index + 1}}: {{ item }}
            </h2>
        </BaseCard>
        <br>
        <h1>Ejemplo con shallowReactive()</h1>
        <br>
        <BaseCard>
            <div class="divBtns">
                <BaseButton :text="'Agregar item sin reactividad'" @click="changeName"/>
                <BaseButton :text="'Reset con reactividad'" @click="replaceState"/>
            </div>
            <br>
            <h2>Informacion de state user:</h2>
            <h2 v-for="(item, index) in state.user" :key="index">
                {{index}}: {{ item }}
            </h2>
        </BaseCard>
    </div>
</template>

<style scoped>
.divBtns {
    display: flex;
    gap: 1rem;
}
</style>

