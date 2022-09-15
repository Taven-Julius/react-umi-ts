/**
 * @Desction umi-request 请求封装
 * @Author 前端老酒馆
 */

import { extend } from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';

const request = extend({
    prefix: 'http://localhost/api', // BaseUrl
    timeout: 15000, // 超时时间
})

// 请求拦截器
request.interceptors.request.use((url, options: RequestOptionsInit): any => {
    const headers = {
        lang: 'zh'
    }

    return {
        url,
        options: { ...options, headers }
    }
})

request.interceptors.response.use(async (res: Response, options: RequestOptionsInit) => {
    const data = await res.clone().json()
    console.log(data, 'res')
    return data
})

export default request