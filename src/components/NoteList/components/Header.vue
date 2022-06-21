<template>
    <div class="note-list-header row flex-center">
        <div class="add-btn row flex-center">
            <q-btn color="primary" rounded flat icon="add" dense />
        </div>
        <q-btn-dropdown v-if="noteListStore.notebookname" :label="noteListStore.notebookname" flat no-caps>
            <q-list>
                <q-item clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>Photos</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>Videos</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>Articles</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>
<script setup lang="ts">
import useNoteListStore from 'stores/note-list'
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
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
}
</style>