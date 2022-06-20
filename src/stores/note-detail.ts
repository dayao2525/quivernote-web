import { defineStore } from 'pinia';
import { getDetail } from 'src/apis';
import { NoteDetail, NoteItem } from 'src/components/models';
import {FetchData} from 'boot/axios'

export default defineStore('NoteDetailStore', {
  state: ():NoteDetail => ({
    id: '',
    notebookid: '',
    name: '',
    content: '',
    create_time: '',
    update_time: '',
    favorite: 0,
    html: '',
    shared: 0,
    tags: '',
    reminider: [],
    export: {
      html: '',
      md: '',
      pdf: '',
      txt: ''
    }
  }),
  actions: {
 
    async getDetail(note: NoteItem) {
      this.id = note.id
      this.notebookid = note.notebookid
      this.shared = note.shared
      this.tags = note.tags
      this.name = note.name
      try {
        const data = await FetchData<NoteDetail>(getDetail(this.notebookid))
        if (data) {
            this.notebookid = data.notebookid
            this.name = data.name
            this.content = data.content
            this.shared = data.shared
            this.favorite = data.favorite
            this.html = data.html
            this.tags = data.tags
            this.create_time = data.create_time
            this.update_time = data.update_time
            this.export = data.export
            this.reminider = data.reminider
        }
      } catch(e) {}
    }
  },
});
