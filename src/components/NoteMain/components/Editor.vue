<template>
  <div class="col">
    <div id="quivernote-editor"></div>
  </div>
</template>
<script setup lang="ts">
import Vditor from '@dayao2525/vditor'
import '@dayao2525/vditor/src/assets/less/index.less'
import { onMounted, ref } from 'vue';
import useDetailStore from 'stores/note-detail'
import useEditorStore from 'stores/editor'
const detailStore = useDetailStore()
const editorStore = useEditorStore()
const editor = ref()
onMounted(() => {
  const options = {
    cdn: '/vditor',
    toolbar: [
      'undo', 'redo', '|',
      'emoji', 'headings', 'bold', 'italic', 'strike', 'link', '|',
      'quote', 'line', 'list', 'ordered-list', 'check', 'outdent', 'indent', '|',
      'code', 'inline-code', 'insert-after', 'insert-before', '|',
      'upload', 'record', 'table', '|',
      'fullscreen', {
        name: 'more',
        toolbar: [
          'export',
          'outline',
          'preview',
          'devtools',
          'info',
          'help',
        ],
      },
    ],
    placeholder: 'Enjoy Markdown! coding now...',
    value: '',
    fullscreen: {
      index: 1001
    },
    preview: {
      actions: [],
      markdown: {
        toc: true
      }
    },
    cache: {
      enable: false
    },
    after() {
      $editor.setValue(detailStore.content, true)
    },
    changeEditMode(mode: string) {
      console.log('ccc changeMode', mode)
    }
  }
  const $editor = new Vditor('quivernote-editor', options)
  editorStore.editor = $editor;
  editor.value = $editor
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.$editor = $editor
})
</script>
<style lang="scss" scoped>
#quivernote-editor {
  height: 100% !important;
  border-left: none;
  border-color: $borderColor;
}
</style>
