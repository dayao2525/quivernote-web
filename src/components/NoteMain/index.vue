<template>
    <div class="note-main col-grow column">
        <div id="quivernote-editor" class="col-grow"></div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteSidebar'
}
</script>
<script setup lang="ts">
import Vditor from 'vditor'
import { onMounted, ref } from 'vue';
import 'vditor/src/assets/less/index.less'

const editor = ref()
onMounted(() => {
    const options = {
        mode: 'sv',

    }
    editor.value = new Vditor('quivernote-editor', options)
})
</script>
<style lang="scss" scoped>
.note-main {
    height: 100vh;
    background-color: yellow
}
</style>