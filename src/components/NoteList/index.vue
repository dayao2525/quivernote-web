<template>
    <div class="note-list">
        <template v-if="noteListStore.notebookid">
            <Header />
            <Sort />
            <List />
        </template>
        <div v-else class="fit row flex-center">
            <span class="text-subtitle2 text-grey-6">Please select a notebook</span>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteList'
}
</script>
<script setup lang="ts">
import Header from './components/Header.vue'
import Sort from './components/Sort.vue'
import List from './components/List.vue'
import useNoteListStore from 'stores/note-list'
const noteListStore = useNoteListStore()
</script>
<style lang="scss" scoped>
.note-list {
    flex-shrink: 0;
    width: 280px;
    height: 100vh;
}
</style>