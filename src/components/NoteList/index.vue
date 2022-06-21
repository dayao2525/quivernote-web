<template>
    <div class="note-list">
        <Header />
        <Sort />
        <List />
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
</script>
<style lang="scss" scoped>
.note-list {
    flex-shrink: 0;
    width: 280px;
    height: 100vh;
}
</style>