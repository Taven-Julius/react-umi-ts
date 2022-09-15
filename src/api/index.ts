import request from '@/utils/request'

export function getTest() {
    return request('/banner/list', {
        method: 'get',
    })
}
