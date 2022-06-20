<template>
    <div class="note-sidebar">
        <Library v-for="library in libraryStore.books" :key="library.name" :library="library" />
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteSidebar'
}
</script>
<script setup lang="ts">
import Library from './components/Library/index.vue'
import useLibraryStore from 'stores/note-library'
const libraryStore = useLibraryStore()
</script>
<style lang="scss" scoped>
.note-sidebar {
    flex-shrink: 0;
    width: 210px;
    height: 100vh;
}
</style>