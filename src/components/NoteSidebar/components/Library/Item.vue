<template>
    <q-item class="library-item" :class="{ 'modifyable': modifyable }" :active="isActive" active-class="active"
        clickable v-ripple @click="clickHandler">
        <q-item-section>
            <q-item-label class="ellipsis tit">{{ book.name }}</q-item-label>
        </q-item-section>
        <q-space />
        <q-item-section side>
            <span class="num">{{ book.notenum }}</span>
            <div v-if="modifyable" class="actions q-gutter-xs">
                <q-btn size="10px" flat dense round icon="delete" @click.stop="deleteHandler" />
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
    modifyable?: boolean
}

const props = defineProps<Props>()

const emits = defineEmits(['delete'])

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

const deleteHandler = () => {
    $q.dialog({
        title: 'Confirm',
        message: 'All notices is this notebook will be moved to trash?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        emits('delete')
    })
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

    &.modifyable {

        &.active,
        &:hover {
            .num {
                display: none;
            }

            .actions {
                display: block;
            }
        }
    }

    :deep(.q-item__section--side) {
        color: inherit
    }
}
</style>