<template>
    <div class="note-main col column">
        <AppBar />
        <Header />
        <div class="col">
            <div id="quivernote-editor"></div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteSMain'
}
</script>
<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import Vditor from 'vditor'
import { onMounted, ref } from 'vue';
import Header from './components/Header.vue'
import 'vditor/src/assets/less/index.less'
import useNoteDetailStore from 'stores/note-detail'

const noteDetailStore = useNoteDetailStore()
const editor = ref()
onMounted(() => {
    const options = {
    }
    editor.value = new Vditor('quivernote-editor', options)
})
</script>
<style lang="scss" scoped>
.note-main {
    height: 100vh;
    border-left: 1px solid $borderColor;
}

#quivernote-editor {
    height: 100% !important;
    border-left: none;
    border-color: $borderColor;
}
</style>