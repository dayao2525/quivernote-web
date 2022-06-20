<template>
    <div class="note-main col column">
        <Header />
        <div class="col">
            <div id="quivernote-editor"></div>
        </div>
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
import Header from './components/Header.vue'
import 'vditor/src/assets/less/index.less'
import useNoteDetailStore from 'stores/note-detail'

const noteDetailStore = useNoteDetailStore()
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
}

#quivernote-editor {
    height: 100% !important;
}
</style>