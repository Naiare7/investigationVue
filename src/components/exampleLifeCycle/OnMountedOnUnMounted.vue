<script setup>
import { 
    ref, 
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate, 
    onUpdated, 
    onBeforeUnmount, 
    onUnmounted } from 'vue';
import BaseCard from '../common/BaseCard.vue';

let autors = ref(['Yoandres', 'Naia', 'Ramiro'])
let count = ref(0)
let autorClass = ref("autor"+(count.value+1))
let currentAutor = ref('Yoandres')

function changeAutor(currentAutor, autorClass){
    count.value = count.value >= 2 ? 0 : count.value+1
    currentAutor.value = autors.value[count.value]
    autorClass.value = "autor"+(count.value+1)
}

let intervalo = null;

onMounted(() => {
    intervalo = setInterval(() => {
    changeAutor(currentAutor, autorClass)
    }, 1000);
});

onUnmounted(() => {
    clearInterval(intervalo);
});

onBeforeMount(() => console.log('Antes de montar'))
onMounted(() => console.log('Montado'))
onBeforeUpdate(() => console.log('Antes de actualizar'))
onUpdated(() => console.log('Actualizado'))
onBeforeUnmount(() => console.log('Antes de desmontar'))
onUnmounted(() => console.log('Desmontado'))
</script>

<template>
    <div>
        <h1>Ejemplo de Ciclo de vida con onMounted y onUnmounted</h1>
        <br>
        <BaseCard>
            <h2>
                Componente de prueba creado por 
                <span :class="[autorClass, 'span-autor']">
                    {{currentAutor}}
                </span>
            </h2>
        </BaseCard>
    </div>
</template>

<style scoped>    
    .autor1{
        color: green;
        border: 0.3rem solid gray;
    }
    .autor2{
        color: violet;
        border: 0.3rem solid gray;
    }
    .autor3{
        color: blue;
        border: 0.3rem solid gray;
    }
    .span-autor{
        padding: 0.5rem 1rem;
        border-radius:1.5rem;
    }
</style>