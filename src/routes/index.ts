/**
 * @Desction 路由文件
 * @Author Julius.Wang
 * @Date 2022-09-14
 */

import menu from './menu'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        title: '登陆'
    },
    ...menu
]

export default routes
