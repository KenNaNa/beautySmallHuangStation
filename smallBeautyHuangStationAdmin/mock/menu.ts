import { MockMethod } from 'vite-plugin-mock';
import menuSchema from '../schemes/menu';

interface queryDto {
    locale?: 'en-US' | 'zh-CN';
}

export default [
    // 查询通知
    {
        url: '/api/menu',
        method: 'get',
        response: ({ query }: any) => {
            let { locale }: queryDto = query;

            if (!locale) {
                locale = 'en-US';
            }

            return {
                code: 'S_0000',
                data: menuSchema[locale],
            };
        },
    },
] as MockMethod[];
