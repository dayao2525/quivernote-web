<template>
    <q-item clickable v-ripple>
        <q-item-section>
            <q-item-label>
                <q-icon v-if="note.shared" :name="matShare" />
                {{ note.name }}
            </q-item-label>
            <q-item-label caption>
                {{ note.update_time }}
                <div class="tags" v-if="note.tags">{{ note.tags }}</div>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar'
import { matShare } from '@quasar/extras/material-icons'
import { NoteItem } from 'src/components/models';
const $q = useQuasar()
defineExpose({ $q })

interface Props {
    note: NoteItem
}

defineProps<Props>()
</script>