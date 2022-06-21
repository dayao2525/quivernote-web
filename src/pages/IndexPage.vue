<template>
  <q-layout view="hHh Lpr lff" container class="fit row wrap">
    <q-drawer :modelValue="showDraw" show-if-above :width="drawWith">
      <div class="row no-wrap no-scroll">
        <NoteSidebar v-if="globalStore.panel_mode === Mode.Three" />
        <NoteList />
      </div>
    </q-drawer>
    <q-page-container>
      <q-page>
        <NoteMain />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import NoteSidebar from 'components/NoteSidebar/index.vue'
import NoteList from 'components/NoteList/index.vue'
import NoteMain from 'components/NoteMain/index.vue'
import useGlobalStore, { PanelMode } from 'stores/global'
import { ref, computed } from 'vue';
const globalStore = useGlobalStore()
globalStore.init()
const Mode = PanelMode

const showDraw = computed(() => globalStore.panel_mode !== Mode.Single)
const drawWith = computed(() => {
  return globalStore.panel_mode === Mode.Two ? 280 : 490
})

</script>
