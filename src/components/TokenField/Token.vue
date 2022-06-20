<template>
    <div class="token row inline items-center">
        <template v-if="!edit">
            <q-icon class="close" :name="matClose" @click.stop="$emit('remove')"></q-icon>
            <span>{{ label }}</span>
        </template>
        <input v-else ref="input" type="text" class="token-input" placeholder="'Please type tag name" :value="label"
            @blur="changeDone" @keypress.enter="changeDone" />
    </div>
</template>
<script setup lang='ts'>
import { matClose } from '@quasar/extras/material-icons'
import { watch, ref, nextTick } from 'vue';
interface Props {
    label: string
    edit: boolean
}

const props = defineProps<Props>()
const input = ref()

watch(() => props.edit, (val) => {
    if (val) {
        nextTick(() => {
            input.value.focus()
            input.value.selectionStart = 0;
            input.value.SelectionEnd = props.label.length
        })
    }

})

const emits = defineEmits(['remove', 'change'])

const changeDone = (e: any) => {
    emits('change', e.target.value)
}
</script>
<style lang="scss" scoped>
.token {
    margin-right: 5px;
    margin-bottom: 4px;
    padding: 0 4px;
    height: 20px;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: default;
    background-color: #f3f7f9;
    border: 1px solid #e4eaec;
    border-radius: 3px;
    font-size: 12px;
    color: #555;

    &:hover {
        border-color: #89bceb
    }
}

.close {
    color: rgba(0, 0, 0, .2);
    font-size: 12px;
    margin-right: 5px;
    cursor: pointer;
}
</style>