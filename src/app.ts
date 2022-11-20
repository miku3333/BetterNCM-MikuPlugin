import { RunTimeLayoutConfig } from '@umijs/max';
import './style/index.less';

export const layout: RunTimeLayoutConfig = initialState => {
    return {
        logo: 'https://cdn.staticaly.com/gh/miku3333/image-hosting@master/20221120/81689532_p0_master1200.6x9fnqz4hk40.webp',
        menu: {
            locale: false
        },
        defaultCollapsed: true,
        breakpoint: false
    };
};

export const qiankun = {
    async bootstrap() {
        console.log('miku-plugin bootstrap');
    },
    async mount() {
        console.log('miku-plugin mount');
    }
};
