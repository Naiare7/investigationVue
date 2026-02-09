<script setup>
import { ref, watch, computed } from 'vue'
import BaseCard from '../common/BaseCard.vue';
import BaseButton from '../common/BaseButton.vue';
import BaseInput from '../common/BaseInput.vue';

//watch con un valor
const count = ref(0)
const logger = ref([]);

watch(count, (newValue, oldValue) => {
  logger.value.push(`Antes: ${oldValue}, Ahora: ${newValue}`)
})

//con multiples valores
const width = ref(100)
const height = ref(200)
const logger2 = ref([]);

watch([width, height], ([newW, newH],[oldW, oldH] ) => {
    console.log('Tamaño cambiado:', newW, newH)
    logger2.value.push(`Tamaño cambiado: ancho: de ${oldW} a ${newW}, alto: de ${oldH} a ${newH}`)
})

const calculateArea = computed({
  get() {
    return `${width.value * height.value}`
  }
})
</script>

<template>
    <div>
        <h1>Ejemplo de Watch con un valor</h1>
        <br>
        <BaseCard>
            <BaseButton :text="'Incremetar '+count" @click="count++"/>
            <br>
            <h2 v-for="(line, index) in logger" :key="index">
                {{ line }}
            </h2>
        </BaseCard>
        <br>
        <h1>Ejemplo de Watch con multiples valores</h1>
        <br>
        <BaseCard>
            <BaseInput :text-label="'Ancho'" v-model="width"/>
            <BaseInput :text-label="'Alto'" v-model="height"/>
            <br>
            <h2 v-for="(line, index) in logger2" :key="index">
                {{ line }} area nueva: {{ calculateArea }}
            </h2>
        </BaseCard>
    </div>
</template>