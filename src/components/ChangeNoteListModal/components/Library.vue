<template>
    <q-expansion-item class="note-library-expansion" default-opened :label="library.name.toUpperCase()">
        <q-list class="rounded-borders" dense>
            <Item v-for="book in library.books" :key="book.id" :book="book" @change="val => $emit('change', val)" />
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
import Item from './Item.vue'
interface Props {
    library: NoteLibrary
}

defineProps<Props>()

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

