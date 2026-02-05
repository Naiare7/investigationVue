<script setup>
import { ref, provide, readonly } from 'vue'
import Child from './Child.vue'
import BaseCard from '../common/BaseCard.vue';

// by providing a ref, the GrandChild
// can react to changes happening here.
const msg = ref('hola, soy un mensaje "Provide"')

function resetMsg() {
  msg.value = 'Hola!! me han reiniciado'
}

provide('msg', { msg: readonly(msg), resetMsg})
</script>

<template>
    <div>
        <h1>Ejemplo de Provide / Inject</h1>
        <br>
        <BaseCard>
            <h2>Este es el componente padre</h2>
            <h2>Este input del componente Parent cambia el value de la variable msg:</h2>
            <input class="inputMsg" v-model="msg">
            <BaseCard>
                <Child />
            </BaseCard>
        <br>
            <h2>al usar provide/inject podemos pasar el estado de msg al componente nieto</h2>
        </BaseCard>
        
    </div>
</template>

<style scoped>
.inputMsg {
    background: rgb(40, 40, 40);;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid white;
    border-radius: 10rem;
    margin: 1rem 0 2rem 0;
}
</style>