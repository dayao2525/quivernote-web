<template>
    <div class="note-library"></div>
    <q-expansion-item group="library" :label="library.name.toUpperCase()">
        <q-list class="rounded-borders" dense>
            <Item v-for="book in library.books" :key="book.id" :book="book" />
        </q-list>
    </q-expansion-item>
</template>
<script lang="ts">
export default {
    name: 'Library'
}
</script>
<script setup lang="ts">
import { NoteLibrary } from 'src/components/models';
import useNoteListStore from 'stores/note-list'
import Item from './Item.vue'
interface Props {
    library: NoteLibrary
}

defineProps<Props>()

const noteListStore = useNoteListStore()

</script>

