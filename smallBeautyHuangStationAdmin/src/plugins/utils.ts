type RouterType = 'push' | 'replace' | 'external';
import Cookies from 'js-cookie';
import { userToken } from '@/config/constants.ts';

export const logout = () => {
    Cookies.remove(userToken);
    window.location.reload();
};
export default ({ router }: any, inject: any) => {
    inject("navigateTo", (url: string | undefined, target: RouterType = 'push') => {
        if (!url) {
            router.back();
        } else {
            if (target === 'external') {
                window.open(url);
            } else {
                router[target](url);
            }
        }
    });
};
