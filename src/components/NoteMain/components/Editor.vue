<template>
    <div class="col">
        <div id="quivernote-editor"></div>
    </div>
</template>
<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/src/assets/less/index.less'
import { onMounted, ref } from 'vue';

const editor = ref()
onMounted(() => {
    const options = {
    }
    editor.value = new Vditor('quivernote-editor', options)
})
</script>
<style lang="scss" scoped>
#quivernote-editor {
    height: 100% !important;
    border-left: none;
    border-color: $borderColor;
}
</style>