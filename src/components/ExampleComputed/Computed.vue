<script setup>
import { ref, computed } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import BaseInput from '../common/BaseInput.vue'

const firstName = ref('Ana')
const lastName = ref('Gómez')

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  }
})

const upperName = computed({
  get() {
    return firstName.value.toLowerCase()
  },
  set(value) {
    firstName.value = value.toUpperCase()
  }
})

const price = ref(100)
const quantity = ref(3)

const total = computed(() => price.value * quantity.value)
</script>

<template>
    <div>
        <h1>Ejemplo de propiedad Computada</h1>
        <BaseCard>
            <BaseInput :text-label="'Nombre'" v-model="upperName"/>
            <BaseInput :text-label="'Apellido'" v-model="lastName"/>
            <BaseInput :text-label="'Precio'" v-model="price"/>
            <BaseInput :text-label="'Cantidad'" v-model="quantity"/>
            <br>
            <h2>Nombre: {{ firstName }}</h2>
            <h2>Apellido: {{ lastName }}</h2>
            <h2>Nombre completo (computed): {{ fullName }}</h2>
            <h2>total (computed): {{ total }}</h2>
        </BaseCard>
    </div>
</template>
