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
    },
    deleteBookById(libraryName: string, notebookid: string) {
      const library = this.books.find(book => book.name === libraryName)
      if (library) {
        const index = library.books.findIndex(item => item.id === notebookid)
        library.books.splice(index, 1)
      }
    }
  },
});
