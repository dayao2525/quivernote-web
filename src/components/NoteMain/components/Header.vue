<template>
    <div class="editor-header row no-wrap">
        <div class="bookname row" @click="showMoveModal = true">
            <q-icon :name="matMenuBook"></q-icon>
            <span class="tit">Inbox</span>
            <q-icon :name="matExpandMore"></q-icon>
        </div>
        <div style="flex: 1">
            <div class="tags row no-wrap">
                <q-icon class="tag-icon" :name="matSell"></q-icon>
                <TokenField :tokens="tags" class="tokens" />
            </div>
        </div>
        <div class="schedule" :class="{ 'active': hasReminider }">
            <span v-if="hasReminider" class="time">{{ scheduleTime }}</span>
            <q-icon class="schedule-icon" :name="matSchedule"></q-icon>
        </div>
    </div>

    <ModalNoteList v-model="showMoveModal" />
</template>
<script setup lang="ts">
import { matMenuBook, matExpandMore, matSell, matSchedule } from '@quasar/extras/material-icons'
import TokenField from 'components/TokenField/index.vue'
import useNoteDetailStore from 'stores/note-detail'
import ModalNoteList from 'components/NoteListModal/index.vue'

import { date } from 'quasar'
import { computed, ref } from 'vue';

const noteDetailStore = useNoteDetailStore()
const showMoveModal = ref(false)
const tags = computed(() => noteDetailStore.tags ? noteDetailStore.tags.split(',') : [])
const hasReminider = computed(() => !Array.isArray(noteDetailStore.reminider) && !!noteDetailStore.reminider.finished_time)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const scheduleTime = computed(() => hasReminider.value ? date.formatDate(noteDetailStore.reminider.finished_time * 1000, 'YYYY-MM-DD HH:mm') : '')
</script>
<style lang="scss" scoped>
.editor-header {
    padding: 10px 10px 5px;
    min-height: 40px;
    background: #f4f5f8;
}

.bookname,
.tags {
    color: #555;
}

.bookname {
    padding: 1px 0;

    .tit {
        margin: 0 .5em;
        font-size: 12px;
        color: #333;
    }
}

.tag-icon {
    margin: 3px 5px 3px 10px;
}

.bookname,
.schedule {
    flex-shrink: 0;
}

.schedule {
    margin-left: 10px;
    color: #999;

    &.active {
        color: $positive
    }

    .time {
        margin-right: 10px;
        font-size: 12px;
    }

    .schedule-icon {
        font-size: 18px;
        cursor: pointer;
    }
}
</style>