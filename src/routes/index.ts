/**
 * @Desction 路由文件
 * @Author Julius.Wang
 * @Date 2022-09-14
 */

const routes = [
    {
        path: '/',
        component: '@/layout/index',
        routes: [
            {
                path: '/home',
                exact: true,
                component: '@/pages/home/index'
            }
        ]
    }
]

export default routes
