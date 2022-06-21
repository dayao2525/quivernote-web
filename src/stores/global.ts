import { defineStore } from 'pinia';
import { init } from 'src/apis';
import { NoteList, OrderType, OrderSort, NoteItem, NoteLibraryBook, NoteTag, UserInfo } from 'src/components/models';
import {FetchData} from 'boot/axios'
import useNoteLibraryStore from 'stores/note-library'

export enum PanelMode {
  Single,
  Two,
  Three
}

interface Props {
    userinfo: UserInfo
    library: NoteLibraryBook[]
    shared_notebooks: NoteLibraryBook[]
    notebooks: NoteLibraryBook[]
    tags: NoteTag[]
    reminder: any[]
    last_notebookid: string;
    last_noteid: string;

    // config
    panel_mode: PanelMode
}

export default defineStore('GlobalStore', {
  state: ():Props => ({
    userinfo: {
        id: 0,
        name: '',
        avatar: ''
    },
    library: [],
    shared_notebooks: [],
    notebooks: [],
    tags: [],
    reminder: [],
    last_notebookid: '',
    last_noteid: '',
    panel_mode: PanelMode.Three
  }),
  actions: {
    async init() {
      try {
        const data = await FetchData<Props>(init())
        if(data) {
            this.userinfo = data.userinfo
            this.library = data.library
            this.shared_notebooks = data.shared_notebooks
            this.notebooks = data.notebooks
            this.tags = data.tags
            this.reminder = data.reminder
            this.last_notebookid = data.last_notebookid
            this.last_noteid = data.last_noteid

            const noteLibraryStore = useNoteLibraryStore()
            noteLibraryStore.init([
                {
                    name: 'library',
                    books: this.library
                }, 
                {
                    name: 'shared notebooks',
                    books: this.shared_notebooks
                }, 
                {
                    name: 'notebooks',
                    books: this.notebooks
                }
            ]
                ,this.tags)
        }
      } catch(e){}
    },
    changePanelMode(mode: PanelMode) {
      this.panel_mode = mode
    }
  },
});
