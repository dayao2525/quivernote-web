<template>
    <div class="tokenfield row">
        <Token v-for="(token, index) in tags" :key="token" :label="token" :edit="editIndex === index"
            @remove="removeHandler(index)" @change="val => changeTagHandler(val, index)" @click="clickHandler(index)" />
        <input type="text" class="token-input" placeholder="click to add tags" @keypress.enter="addTags">
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Token from './Token.vue'
interface Props {
    tokens: string[]
}
const props = defineProps<Props>()
const tags = ref(props.tokens)
const editIndex = ref()
const removeHandler = (index: number) => {
    tags.value.splice(index, 1)
}

const clickHandler = (index: number) => {
    editIndex.value = index
}
const changeTagHandler = (val: string, index: number) => {
    editIndex.value = void 0;
    tags.value[index] = val
}

const addTags = (e: any) => {
    const tag = e.target.value.trim()
    if (tag) {
        tags.value.push(tag)
    }
    e.target.value = ''
}
</script>

<style lang="scss">
.tokenfield {
    .token-input {
        padding: 0;
        min-width: 60px;
        height: 18px;
        background: none !important;
        border: 0 !important;
        box-shadow: none;
        font-size: inherit;
        line-height: inherit;
        outline: none;
    }
}
</style>