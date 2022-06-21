import { defineStore } from 'pinia';
import { getNoteList } from 'src/apis';
import { NoteList, OrderType, OrderSort, NoteItem, NoteLibraryBook } from 'src/components/models';
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
    changeNoteBook(book: NoteLibraryBook, tag?: boolean) {
      this.notebookid = tag ? book.name : book.id
      this.notebookname = book.name
      this.orderSort = OrderSort.ASC
      this.orderType = OrderType.NAME
      this.list = []
      this.fetchData()
    },
    async fetchData() {
      try {
        const data = await FetchData<NoteItem[]>(getNoteList(this.notebookid, this.orderType, this.orderSort))
        data && (this.list = data)
      } catch(e){}
    },
    changeOrderType(type: OrderType) {
      this.orderType = type
      this.list = []
      this.fetchData()
    },
    changeOrderSort(srot: OrderSort) {
      this.orderSort = srot
      this.list = []
      this.fetchData()
    }
  },
});
