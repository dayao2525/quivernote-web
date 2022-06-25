<template>
    <q-popup-proxy ref="dialogRef">
        <q-card class="q-mt-sm column change-note-modal" style="max-height: 100vh;height: 460px">
            <q-card-section class="items-center">
                <q-input v-model="filter" placeholder="Find notebook or tag" :debounce="300" dense outlined clearable>
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </q-card-section>
            <q-card-section class="q-pa-none col-grow no-wrap">
                <q-scroll-area class="fit">
                    <Library v-for="book in filterLibrary" :key="book.name" :library="book" @change="changeHandle" />
                </q-scroll-area>
            </q-card-section>
            <q-separator />
        </q-card>
    </q-popup-proxy>
</template>
<script lang="ts">
export default {
    name: 'ChangeNoteListModal'
}
</script>
<script setup lang="ts">
import Library from './components/Library.vue'
import useNoteLibraryStore from 'stores/note-library'
import useNoteListStore from 'stores/note-list'
import { ref, computed } from 'vue';
import { NoteLibraryBook } from '../models';
import { useQuasar, useDialogPluginComponent } from 'quasar'

const { dialogRef, onDialogOK } = useDialogPluginComponent()

const libraryStore = useNoteLibraryStore()
const noteListStore = useNoteListStore()
const filter = ref('')

const library = computed(() => {
    return [
        ...libraryStore.books,
        {
            name: 'tags',
            books: libraryStore.tags.map(tag => ({
                ...tag,
                id: tag.name,
                icon: '',
                tag: true
            }))
        }
    ]
})

const filterLibrary = computed(() => {
    const val = filter.value ? filter.value.trim() : ''
    return !val ? library.value : library.value.map(book => {
        return {
            ...book,
            books: book.books.filter(item => item.name.toLowerCase().indexOf(val) !== -1)
        }
    })
})

const changeHandle = (book: NoteLibraryBook) => {
    noteListStore.changeNoteBook(book as NoteLibraryBook, book.tag)
    onDialogOK()
}

</script>

<style lang="scss" scoped>
.change-note-modal {
    width: 280px;
}
</style>
