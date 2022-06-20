<template>
    <q-item class="note-list-item" :active="noteDetailStore.id === note.id" active-class="active" clickable v-ripple
        @click="clickHandler">
        <q-item-section>
            <q-item-label class="row title" :lines="1">
                <q-icon class="item-icon" v-if="note.shared" :name="matShare" />
                <span class="tit">{{ note.name }}</span>
            </q-item-label>
            <q-item-label class="caption row no-wrap" :lines="1">
                {{ note.update_time }}
                <span v-if="note.tags" class="tags ellipsis col">
                    <q-icon class="item-icon" :name="matSell"></q-icon>
                    <span>
                        {{ note.tags }}
                    </span>
                </span>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar'
import { matShare, matSell } from '@quasar/extras/material-icons'
import { NoteItem } from 'src/components/models';
import useNoteDetailStore from 'stores/note-detail'
const $q = useQuasar()
defineExpose({ $q })
const noteDetailStore = useNoteDetailStore()


interface Props {
    note: NoteItem
}

const props = defineProps<Props>()

const clickHandler = async () => {
    await noteDetailStore.getDetail(props.note)
}
</script>

<style lang="scss" scoped>
.note-list-item {
    padding-top: 13px;
    padding-bottom: 10px;
}

.active {
    background-color: #2673e7;
}

.title {
    color: #333;
}

.caption {
    margin-top: 6px;
    color: #999
}

.item-icon {
    margin-right: 6px;
}

.tags {
    margin-left: 6px;
}

.active {

    .title,
    .caption {
        color: #fff;
    }
}
</style>