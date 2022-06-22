<template>
    <q-dialog ref="dialogRef" :modelValue="modelValue" @hide="$emit('update:model-value', false)" position="top">
        <q-card class="q-mt-sm column" style="width: 350px;max-height: 100vh;height: 460px">
            <q-card-section class="items-center">
                <div class=" text-h6">Move to Notebook</div>
            </q-card-section>
            <q-card-section class="q-pa-none col-grow no-wrap">
                <q-scroll-area class="fit">
                    <Library v-for="library in libraryStore.books" :key="library.name" :library="library"
                        :selected="selected" @change="changeHandle" />
                </q-scroll-area>
            </q-card-section>
            <q-separator />

            <q-card-actions align="right">
                <q-btn v-close-popup size="sm" outline label="Cancel" />
                <q-btn size="sm" color="secondary" label="Move" :loading="posting" :disabled="disabled"
                    @click="moveHandle" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
<script lang="ts">
export default {
    name: 'NoteListModal'
}
</script>
<script setup lang="ts">
import Library from './components/Library.vue'
import useNoteLibraryStore from 'stores/note-library'
import useNoteListStore from 'stores/note-list'
import { ref, watch, computed } from 'vue';
import { useQuasar, useDialogPluginComponent } from 'quasar'
const props = defineProps({
    modelValue: Boolean
})
const $q = useQuasar()
const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent()
const libraryStore = useNoteLibraryStore()
const noteListStore = useNoteListStore()
const selected = ref(noteListStore.notebookid)
watch(() => props.modelValue, (val) => {
    !val && (selected.value = noteListStore.notebookid)
})
const posting = ref(false)
const disabled = computed(() => selected.value === noteListStore.notebookid)
const changeHandle = (id: string) => {
    selected.value = id
}
const moveHandle = () => {
    $q.dialog({
        title: 'Alert',
        message: 'Some message'
    }).onOk(() => {
        posting.value = true
        setTimeout(() => {
            onDialogOK()
            posting.value = false
        }, 3000)
    })
}
</script>