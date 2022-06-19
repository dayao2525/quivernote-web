<template>
  <div class="fit row wrap justify-start items-start content-start">
    <NoteSidebar />
    <NoteList />
    <NoteMain />
  </div>
</template>

<script lang="ts" setup>
import NoteSidebar from 'components/NoteSidebar/index.vue'
import NoteList from 'components/NoteList/index.vue'
import NoteMain from 'components/NoteMain/index.vue'
</script>
