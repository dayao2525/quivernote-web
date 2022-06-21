<template>
    <q-expansion-item class="note-library-expansion" group="library" :label="library.name.toUpperCase()">
        <q-list class="rounded-borders" dense>
            <Item v-for="book in library.books" :key="book.id" :book="book"
                :modifyable="library.name.toUpperCase() === 'NOTEBOOKS'" @delete="deleteHandler(book.id)" />
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
import useNoteLibraryStore from 'stores/note-library'
import Item from './Item.vue'
interface Props {
    library: NoteLibrary
}

const props = defineProps<Props>()

const noteLibraryStore = useNoteLibraryStore()

const deleteHandler = (id: string) => {
    noteLibraryStore.deleteBookById(props.library.name, id)
}
</script>
<style lang="scss" scoped>
.note-library-expansion {

    :deep(.q-expansion-item__container) {
        &>.q-item {
            padding: 0 10px;
            min-height: auto;

            .q-item__label {
                color: #888;
                font-size: 10px;
            }
        }
    }
}
</style>

