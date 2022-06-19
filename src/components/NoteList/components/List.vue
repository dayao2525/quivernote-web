<template>
    <q-scroll-area class="note-list-scroller">
        <q-list bordered separator>
            <Item v-for="note in noteListStore.list" :key="note.id" :note="note" />
        </q-list>
    </q-scroll-area>
</template>
<script setup lang="ts">
import Item from './Item.vue'
import useNoteListStore from 'stores/note-list'
const noteListStore = useNoteListStore()

noteListStore.fetchData()
</script>

<style lang="scss" scoped>
.note-list-scroller {
    height: 100%;
}
</style>