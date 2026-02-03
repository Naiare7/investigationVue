<script setup>
import slotScopedChild from './SlotScopedChild.vue';
</script>

<template>
    <div>
        <h1>Ejemplo con slots pasando datos</h1>
        <h2>El componente hijo define los datos "frutas" y los "slots" de la estructura.</h2>
        <h2>El componente Padre decide como renderizar esos datos para colocar en los slots</h2>
        <br>
        <slotScopedChild :fruits="fruits">
            <template #title>
                <h2>Lista de frutas: slot con nombre "title"</h2>
            </template>
            <template #default="{ fruit }">
                <div class="fruit_item">
                    <span class="material-icons-outlined">label</span>
                    <strong>{{ fruit.name }}</strong>
                </div>
            </template>
        </slotScopedChild>
    </div>
</template>

<style scoped>
.fruit_item {
    display: flex;
    place-items: center;
    padding: 0.5rem 1rem;
    border: 0.1rem solid gray;
    border-radius: 1rem;
    gap: 0.5rem;
    margin: 0.5rem;
}
</style>
