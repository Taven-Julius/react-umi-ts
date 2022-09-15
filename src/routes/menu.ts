/**
 * @Desction 只配置菜单可访问路径的
 * @Author Julius.Wang
 * @Date 2022-09-14
 */


const menu = [
    {
        path: '/home',
        component: '@/layout/index',
        meta: { title: '首页', icon: 'LaptopOutlined', code: '1' },
        routes: [
            {
                path: '/home/index',
                exact: true,
                component: '@/pages/home/index',
                meta: { title: 'banner图管理', icon: 'cc', code: '2' },

            }
        ]
    }
]

export default menu