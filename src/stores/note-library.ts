import { defineStore } from 'pinia';
import { getNoteList } from 'src/apis';
import { NoteList, OrderType, OrderSort, NoteItem, NoteLibrary, NoteTag } from 'src/components/models';
import {FetchData} from 'boot/axios'

interface Props {
    books: NoteLibrary[],
    tags: NoteTag[]
}
export default defineStore('NoteLibraryStore', {
  state: ():Props => ({
    books: [],
    tags: []
  }),
  actions: {
    init(books: NoteLibrary[], tags: NoteTag[]) {
        this.books = books
        this.tags = tags
    }
  },
});
