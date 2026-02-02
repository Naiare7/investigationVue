<script setup>
import BaseCard from '../common/BaseCard.vue'
</script>

<template>
    <div>
         <h2>- Aqui cargamos un componente comun y desde el padre le pasamos el contenido que espera el slot.</h2>
         <h2>- El padre decide que contenido va dentro del componente que tiene slot</h2>
         <br>
        <BaseCard>
            <h3>Título decido en el padre</h3>
            <p>Este contenido viene del componente padre</p>
        </BaseCard>
    </div>
</template>

