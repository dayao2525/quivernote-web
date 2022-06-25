<template>
    <div class="note-main col column">
        <AppBar />
        <template v-if="noteDetailStore.id">
            <Header />
            <Editor />
        </template>
        <div v-else class="col-grow row flex-center">
            <span class="text-h6 text-grey-6">No note selected</span>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteSMain'
}
</script>
<script setup lang="ts">
import Header from './components/Header.vue'
import AppBar from './components/AppBar.vue'
import useNoteDetailStore from 'stores/note-detail'
import Editor from './components/Editor.vue'

const noteDetailStore = useNoteDetailStore()

</script>
<style lang="scss" scoped>
.note-main {
    height: 100vh;
    border-left: 1px solid $borderColor;
}
</style>