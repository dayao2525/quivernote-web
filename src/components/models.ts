// 排序类型
export enum OrderSort {
  DESC = 'DESC',
  ASC = 'ASC'
}

// 排序方式
export enum OrderType {
  CREATE_TIME = 'create_time',
  UPDATE_TIME = 'update_time',
  NAME = 'name',
  MANUALLY = 'manually'
}

// 笔记本列表
export interface NoteList {
  // 当前选中的笔记本名字
  notebookname: string;
  // 当前选中的笔记本id
  notebookid: string;
  // 当前排序方式
  orderSort: OrderSort
  // 排序方式
  orderType: OrderType
  list: NoteItem[]
}
// 笔记本
export interface NoteItem {
  id: string,
  name: string,
  update_time: string,
  notebookid: string,
  shared: number,
  tags: string
}

// 笔记本详情
export interface NoteDetail {
  id: string;
  notebookid: string;
  name: string;
  content: string;
  create_time: string;
  update_time: string;
  favorite: number;
  html: string;
  shared: number;
  tags: string;
  reminider: any[] | {
    done: number;
    finished_time: number
  };
  export: {
    html: string;
    md: string;
    pdf: string;
    txt: string;
  }
}

export interface NoteTag {
  name: string;
  notenum: number
}

export interface NoteLibraryBook {
  id: string,
  name: string,
  icon: string,
  notenum: number
}

export interface NoteLibrary {
  name: string,
  books: NoteLibraryBook[]
}

export interface UserInfo {
  id: number;
  name: string;
  avatar: string;
}