import { api } from 'boot/axios'
import { OrderSort, OrderType } from 'src/components/models'

export const init = () => api.post('/mock/init.json')

export const getNoteList = (notebookid: string, order_type = OrderType.NAME, order_sort = OrderSort.ASC) => api.post('/mock/notelist.json', {
    notebookid,
    order_type,
    order_sort
})

export const getDetail = (notebookid: string) => api.post('/mock/detail.json',{
    notebookid
})