import { defineStore } from 'pinia';
import { getNoteList } from 'src/apis';
import { NoteList, OrderType, OrderSort, NoteItem } from 'src/components/models';
import {FetchData} from 'boot/axios'

export default defineStore('NoteListStore', {
  state:  ():NoteList => ({
    notebookname: '',
    notebookid: '',
    orderType: OrderType.NAME,
    orderSort: OrderSort.ASC,
    list: [],
  }),
  actions: {
    addNote(note: NoteItem) {
        this.list.unshift(note)
    },
    async fetchData() {
      try {
        const data = await FetchData<NoteItem[]>(getNoteList(this.notebookid, this.orderType, this.orderSort))
        data && (this.list = data)
      } catch(e){}
    }
  },
});
