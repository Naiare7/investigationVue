<script setup>
import { ref, watchEffect, computed } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import BaseInput from '../common/BaseInput.vue'

const price = ref(50)
const quantity = ref(2)
const className = ref('')

const total = computed(() => price.value * quantity.value)

watchEffect(() => {
    className.value = total.value > 500 ? 'priceHight' : ''
})
</script>

<template>
    <div>
        <h1>Ejemplo de watchEffect</h1>
        <br>
        <BaseCard>
            <BaseInput :text-label="'Precio'" v-model="price"/>
            <BaseInput :text-label="'Canrtidad'" v-model="quantity"/>
            <br>            
            <h2 :class="['default', className]">total: {{ total }}</h2>
        </BaseCard>
    </div>
</template>

<style scoped>
.priceHight {
    background-color: red;
    color: white;
    transition: background-color 1seg ease-in-out;
}
.default {
    border-radius: 1rem;
    padding: 1rem;    
}
</style>