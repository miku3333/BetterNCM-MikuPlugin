import './style/index.less';

export const layout = () => {
    return {
        logo: 'https://cdn.staticaly.com/gh/miku3333/image-hosting@master/20221120/81689532_p0_master1200.6x9fnqz4hk40.webp',
        menu: {
            locale: false
        }
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

// export function render(oldRender: any) {
//     const reactRoot = document.querySelector('#miku-plugin-root') || document.createElement('div');
//     reactRoot.id = 'miku-plugin-root';
//     document.body.appendChild(reactRoot);
//     // @ts-ignore
//     // console.log(root);
//     console.log('umi render start');
//     console.log(oldRender);
//     console.log(oldRender());
//     console.log('umi render end');
// }
