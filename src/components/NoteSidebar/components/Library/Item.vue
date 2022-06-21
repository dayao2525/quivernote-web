<template>
    <q-item class="library-item" :active="isActive" active-class="active" clickable v-ripple @click="clickHandler">
        <q-item-section>
            <q-item-label class="ellipsis tit">{{ book.name }}</q-item-label>
        </q-item-section>
        <q-space />
        <q-item-section side>
            <span class="num">{{ book.notenum }}</span>
            <div class="actions q-gutter-xs">
                <q-btn size="10px" flat dense round icon="delete" />
                <q-btn size="10px" flat dense round icon="edit" />
            </div>
        </q-item-section>
    </q-item>
</template>
<script lang="ts">
export default {
    name: 'LibraryItem'
}
</script>
<script setup lang="ts">
import { NoteLibraryBook, NoteTag } from 'src/components/models';
import useNoteListStore from 'stores/note-list'
import { useQuasar } from 'quasar'
import { computed } from '@vue/reactivity';
const $q = useQuasar()
defineExpose({ $q })
interface Props {
    book: NoteLibraryBook | NoteTag,
    tag?: boolean
}

const props = defineProps<Props>()

const noteListStore = useNoteListStore()

const isActive = computed(() => {
    if (props.tag) {
        return noteListStore.notebookid === props.book.name
    } else {
        return noteListStore.notebookid === (props.book as NoteLibraryBook).id
    }
})

const clickHandler = () => {
    noteListStore.changeNoteBook(props.book as NoteLibraryBook, props.tag)
}
</script>
<style lang="scss" scoped>
.library-item {
    padding-left: 20px;
    color: #444;
    font-size: 12px;

    .actions {
        display: none;
    }

    &.active {
        color: #fff;
        background-color: #2673e7;
    }

    &.active,
    &:hover {
        .num {
            display: none;
        }

        .actions {
            display: block;
        }
    }

    :deep(.q-item__section--side) {
        color: inherit
    }
}
</style>