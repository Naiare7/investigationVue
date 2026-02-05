<script setup>
import { reactive, toRefs } from 'vue'
import BaseCard from '../common/BaseCard.vue';
import BaseInput from '../common/BaseInput.vue';

const state = reactive({
  name: 'Carlos Flores',
  age: 30,
  hobbies: ['calistenia', 'futbol']
})

const { name, age, hobbies } = toRefs(state)

/* const birthday = () => {
  user.age++
} */
</script>

<template>
    <div>
        <h1>Ejemplo con toRefs()</h1>
        <br>
        <BaseCard>
            <BaseInput :textLabel="'Nombre'" :placeholder="'Nombre'" v-model="name"/>
            <BaseInput :textLabel="'Edad'" :placeholder="'Edad'" v-model="age"/>
            <BaseInput v-for="(hobbie, index) in hobbies" :key="index" 
            :textLabel="'Hobbie '+(index+1)" 
            :placeholder="'Hobbie'" 
            v-model="hobbies[index]"/>
            <br>
            <h2>Nombre: {{ state.name }}</h2>
            <h2>Edad: {{ state.age }}</h2>
            <h2>Pasatiempos:</h2>
            <h2 v-for="(hobbie, index) in state.hobbies" :key="index">
                {{index + 1}}: {{ hobbie }}
            </h2>
        </BaseCard>
    </div>
</template>
