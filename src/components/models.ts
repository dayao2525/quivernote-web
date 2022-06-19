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