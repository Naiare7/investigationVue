<script setup>
import slotScopedChild from './SlotScopedChild.vue';
</script>

<template>
    <slotScopedChild :fruits="fruits">
        <template #default="{ fruit }">
            <span class="material-icons-outlined">
                label
            </span>
            <strong>{{ fruit.name }}</strong>
        </template>
    </slotScopedChild>
</template>

