<script setup>
import { inject } from 'vue'
import BaseCard from '../common/BaseCard.vue';
import BaseButton from '../common/BaseButton.vue';

const { msg, resetMsg } = inject('msg', 'dafault value')
</script>

<template>
    <BaseCard>
        <h2>Este es el componente nieto</h2>
        <h3>
            Mensaje para el componente nieto:
            <span class="material-icons-outlined">arrow_downward</span>
        </h3>
        <h2>{{ msg }}</h2>
        <BaseButton :text="'Reset Msg'" @click="resetMsg" />
    </BaseCard>
</template>