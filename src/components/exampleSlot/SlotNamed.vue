<script setup>
import BaseModal from '../common/BaseModal.vue'
import BaseButton from '../common/BaseButton.vue'
</script>

<template>
    <div>
        <h1>Ejemplo con slots nombrados</h1>
        <h2>El padre envia un contenido personalizado en cada slot con nombre:</h2>
        <h2>Permite múltiples áreas personalizables dentro del mismo componente.</h2>
        <br>
        <BaseModal>
            <template #header>
                <h2>Confirmar acción: slot con nombre "header"</h2>
            </template>

            <h2>¿Estás seguro de continuar?: slot por defecto</h2>

            <template #footer>
                <h2>slot con nombre "footer"</h2>
                <BaseButton :text="'Cancelar'" :classNames="'btnCancel'" />
                <BaseButton :text="'Confirmar'" />
            </template>
        </BaseModal>
    </div>    
</template>

<style scoped>
.btnCancel {
    background-color: gray;
    border-color: gray;
}
.btnCancel:hover {
    border-color: red;
    background-color: rgb(255, 79, 79);
}
</style>

