<template>
    <div class="note-list-header row flex-center">
        <div class="add-btn row flex-center">
            <q-btn color="primary" rounded flat icon="add" dense />
        </div>
        <q-btn v-if="noteListStore.notebookname" class="change-btn" :label="noteListStore.notebookname" flat no-caps
            :icon-right="matKeyboardArrowDown" />
        <ChangeNoteListModal />

    </div>
</template>
<script setup lang="ts">
import { matKeyboardArrowDown } from '@quasar/extras/material-icons'
import useNoteListStore from 'stores/note-list'
import ChangeNoteListModal from 'components/ChangeNoteListModal/index.vue'
const noteListStore = useNoteListStore()
</script>
<style lang="scss" scoped>
.note-list-header {
    position: relative;
    height: $headerbarHeight;
    border-bottom: 1px solid $borderColor;
}

.add-btn {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto 0;
}

.change-btn {
    :deep(.on-right) {
        font-size: 14px;
        margin-left: 5px;
    }
}
</style>