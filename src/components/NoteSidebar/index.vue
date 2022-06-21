<template>
    <div class="note-sidebar column">
        <div class="note-sidebar-header row flex-center">
            <q-btn-group class="sidebar-tag" outline>
                <q-btn class="col" :outline="tab !== 'library'" no-caps color="primary" label="Notebooks" size="sm"
                    @click="changeTab('library')" />
                <q-btn class="col" :outline="tab !== 'tags'" no-caps color="primary" label="Tags" size="sm"
                    @click="changeTab('tags')" />
            </q-btn-group>
        </div>

        <q-tab-panels v-model="tab" class="librarys col-grow" animated>
            <q-tab-panel class="q-pa-none column" name="library">
                <div class="note-library col-grow">
                    <Library v-for="library in libraryStore.books" :key="library.name" :library="library" />
                </div>
                <div class="note-library-footer row q-px-sm items-center col-shrink">
                    <q-btn color="primary" rounded flat icon="add" dense />
                </div>
            </q-tab-panel>

            <q-tab-panel class="q-pa-none" name="tags">
                <q-list class="rounded-borders" dense>
                    <TagItem v-for="tag in libraryStore.tags" :key="tag.name" :book="tag" tag />
                </q-list>
            </q-tab-panel>
        </q-tab-panels>

    </div>
</template>
<script lang="ts">
export default {
    name: 'NoteSidebar'
}
</script>
<script setup lang="ts">
import Library from './components/Library/index.vue'
import TagItem from './components/Library/Item.vue'
import useLibraryStore from 'stores/note-library'
import { ref } from 'vue';
const libraryStore = useLibraryStore()

const tab = ref('library')

const changeTab = (val: string) => {
    tab.value = val
}
</script>
<style lang="scss" scoped>
.note-sidebar {
    flex-shrink: 0;
    width: 210px;
    height: 100vh;
    border-right: 1px solid $borderColor;
}

.note-sidebar-header {
    height: $headerbarHeight;
    border-bottom: 1px solid $borderColor;
}

.sidebar-tag {
    :deep(*) {
        .q-btn {
            width: 80px;
        }
    }
}

.librarys {
    background-color: #f4f5f9;
}

.note-library-footer {
    height: 40px;
    border-top: 1px solid $borderColor;
    background-color: #fff;
}
</style>