<template>
    <div class="note-list">
        <List />
    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteList'
}
</script>
<script setup lang="ts">
import List from './components/List.vue'
</script>
<style lang="scss" scoped>
.note-list {
    width: 280px;
    height: 100vh;
}
</style>