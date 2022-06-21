import { defineStore } from 'pinia';

export enum EditorMode {
    unwatch = 'unwatch',
    watch = 'watch',
    preview = 'preview'
}

interface Props {
    mode: EditorMode
}

export default defineStore('EditorStore', {
  state: ():Props => ({
    mode: EditorMode.unwatch
  }),
  actions: {
    async changeMode(mode: EditorMode) {
      this.mode = mode
    }
  },
});
