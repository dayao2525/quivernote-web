<template>
    <div class="col">
        <div id="quivernote-editor"></div>
    </div>
</template>
<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/src/assets/less/index.less'
import { onMounted, ref } from 'vue';
import useDetailStore from 'stores/note-detail'

const detailStore = useDetailStore()
const editor = ref()
onMounted(() => {
    const options = {
        toolbar: [
            'undo', 'redo', '|',
            'emoji', 'headings', 'bold', 'italic', 'strike', 'link', '|',
            'quote', 'line', 'list', 'ordered-list', 'check', 'outdent', 'indent', '|',
            'code', 'inline-code', 'insert-after', 'insert-before', '|',
            'upload', 'record', 'table', '|',
            'fullscreen', 'edit-mode', {
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
            markdown: {
                toc: true
            }
        },
        cache: {
            enable: false
        },
        debugger: true,
        after() {
            $editor.setValue(detailStore.content, true)
        }
    }
    const $editor = new Vditor('quivernote-editor', options)
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