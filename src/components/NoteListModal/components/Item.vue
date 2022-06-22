<template>
    <q-item class="library-item" :active="book.id === selected" active-class="active" clickable v-ripple
        @click="clickHandler">
        <q-item-section>
            <q-item-label class="ellipsis tit">{{ book.name }}</q-item-label>
        </q-item-section>
        <q-space />
        <q-item-section side>
            <q-icon v-if="isActive" name="check" size="16px" />
        </q-item-section>
    </q-item>
</template>
<script lang="ts">
export default {
    name: 'LibraryItem'
}
</script>
<script setup lang="ts">
import { NoteLibraryBook } from 'src/components/models';
import useNoteListStore from 'stores/note-list'
import { useQuasar } from 'quasar'
import { computed } from '@vue/reactivity';
const $q = useQuasar()
defineExpose({ $q })
interface Props {
    book: NoteLibraryBook,
    selected: string
}

const props = defineProps<Props>()
const emits = defineEmits(['change'])
const noteListStore = useNoteListStore()

const isActive = computed(() => {
    return noteListStore.notebookid === (props.book as NoteLibraryBook).id
})

const clickHandler = () => {
    // noteListStore.changeNoteBook(props.book as NoteLibraryBook, props.tag)
    emits('change', props.book.id)
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

    :deep(.q-item__section--side) {
        color: inherit
    }
}
</style>