import { api } from 'boot/axios'
import { OrderSort, OrderType } from 'src/components/models'

export const getNoteList = (notebookid: string, order_type = OrderType.NAME, order_sort = OrderSort.ASC) => api.post('/mock/notelist.json', {
    notebookid,
    order_type,
    order_sort
})

export const getDetail = (notebookid: string) => api.post('/mock/detail.json',{
    notebookid
})