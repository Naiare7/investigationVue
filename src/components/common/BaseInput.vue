<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'DefaultPlaceholder'
    },
    type:{
        type: String,
        default: 'text'
    },
    textLabel:{
        type: String,
    },
    classInput: String,
    classLabel: String,
})
const model = defineModel()
</script>

<template>
    <label v-if="textLabel" 
        :class="['base-input-label', classLabel]">
            {{ textLabel }}
    </label>
    <input 
        :class="['base-input', classInput]" 
        :placeholder="placeholder"
        :type="type"
        v-model="model"
    >
</template>

<style scoped>
.base-input {
    background: rgb(40, 40, 40);;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid white;
    border-radius: 10rem;
    margin: 1rem 0 1rem 0;
}
.base-input-label {
    font-size: 1.3rem;
    font-weight: 600;
}
</style>
