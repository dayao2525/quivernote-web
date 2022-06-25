import { defineStore } from 'pinia'
import { NoteLibrary, NoteTag } from 'src/components/models'
import useNoteListStore from './note-list'
interface Props {
    books: NoteLibrary[]
    tags: NoteTag[]
}
export default defineStore('NoteLibraryStore', {
    state: (): Props => ({
        books: [],
        tags: [],
    }),
    actions: {
        init(books: NoteLibrary[], tags: NoteTag[]) {
            this.books = books
            this.tags = tags
        },
        deleteBookById(libraryName: string, notebookid: string) {
            const library = this.books.find((book) => book.name === libraryName)
            if (library) {
                const index = library.books.findIndex(
                    (item) => item.id === notebookid,
                )
                library.books.splice(index, 1)
            }
        },
        updateBookName(notebookid: string, name: string) {
            const notebook = this.books.find(
                (book) => book.name.toLowerCase() === 'notebooks',
            )
            if (notebook) {
                const book = notebook.books.find(
                    (book) => book.id == notebookid,
                )
                if (book) {
                    book.name = name
                    const noteListStore = useNoteListStore()
                    if (noteListStore.notebookid == book?.id) {
                        noteListStore.notebookname = book.name
                    }
                }
            }
        },
        addBook(name: string) {
            const notebook = this.books.find(
                (book) => book.name.toLowerCase() === 'notebooks',
            )
            if (notebook) {
                notebook.books.push({
                    id: name,
                    name,
                    icon: '',
                    notenum: 0,
                })
            }
        },
    },
})
