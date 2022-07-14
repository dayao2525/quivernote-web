import Vditor from '@dayao2525/vditor';
import { defineStore } from 'pinia';

export enum EditorMode {
    unwatch = 'unwatch',
    watch = 'watch',
    preview = 'preview'
}

interface Props {
    mode: EditorMode,
    editor: Vditor | undefined
}

export default defineStore('EditorStore', {
  state: ():Props => ({
    mode: EditorMode.unwatch,
    editor: void 0
  }),
  actions: {
    async changeMode(mode: EditorMode) {
      this.mode = mode
    }
  },
});
