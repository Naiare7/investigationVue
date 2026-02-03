<!--
Modal component with customizable slots and CSS transitions.
-->
<script setup>
import BaseModal2 from '../common/BaseModal2.vue'
import BaseButton from '../common/BaseButton.vue'
import { ref } from 'vue'

const showModal = ref(false)

const data = ref({
    id: "12qw34er",
    name: "Alfa",
})
</script>

<template>
    <div>
        <h1>Ejemplo con Teleport</h1>
        <h2>usamos el componente BaseModal2 como componente hijo</h2>
        <h2>Le pasamos contenido dinamico mediante los slots por nombre.</h2>
        <h2>Le hacemos teleport al componente hijo haciendo que se renderice en el body.</h2>
        <br>
        <BaseButton id="show-modal" @click="showModal = true" :text="'Mostrar Modal'" />
    </div>

    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <BaseModal2 :show="showModal" @close="showModal = false">
            <template #header>
                <h2>Eliminar a {{data.name}}</h2>
            </template>

            <template #body>
                <h2>¿Estas seguro de ralizar esta accion?</h2>
                <h2>{{ data.name }} se eliminará permanentemente!!</h2>
            </template>

            <template #footer>
                <div class="footer">
                    <BaseButton @click="showModal = false" :text="'Cancelar'" :classNames="'btn-cancel'" ></BaseButton>
                    <BaseButton :text="'Confirmar'" ></BaseButton>
                </div>
            </template>
        </BaseModal2>
    </Teleport>
</template>

<style scoped>
.btn-cancel {
  background-color: gray;
  border:0.1rem solid gray;
}
.btn-cancel:hover {
    background-color: rgb(98, 98, 98);
    border:0.2rem solid rgb(98, 98, 98);
}
.footer {
    display: flex;
    gap: 1rem;
    place-items: center;
    justify-content: center;
}
</style>